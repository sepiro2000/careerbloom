#!/bin/bash

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# ============================================
# Configuration - 여기에 값을 입력하세요
# ============================================
S3_BUCKET="career-bloom-kr-frontend"
DISTRIBUTION_ID="E2NV7AH7XE1RUD"  # CloudFront Distribution ID 입력

# ============================================

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
FRONTEND_DIR="$PROJECT_ROOT/frontend"

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  CareerBloom 프론트엔드 배포 스크립트${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""

# Check configuration
if [ -z "$DISTRIBUTION_ID" ]; then
    echo -e "${RED}오류: DISTRIBUTION_ID가 설정되지 않았습니다.${NC}"
    echo "deploy.sh 파일을 열어 DISTRIBUTION_ID 값을 입력해주세요."
    exit 1
fi

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}오류: AWS CLI가 설치되어 있지 않습니다.${NC}"
    exit 1
fi

# Check AWS credentials
if ! aws sts get-caller-identity &> /dev/null; then
    echo -e "${RED}오류: AWS 자격 증명이 설정되지 않았습니다.${NC}"
    echo "aws configure 명령으로 자격 증명을 설정해주세요."
    exit 1
fi

echo -e "S3 버킷: ${S3_BUCKET}"
echo -e "CloudFront: ${DISTRIBUTION_ID}"
echo ""

# Build frontend
echo -e "${YELLOW}[1/3] 프론트엔드 빌드 중...${NC}"
cd "$FRONTEND_DIR"

if [ ! -d "node_modules" ]; then
    echo "의존성 설치 중..."
    npm install
fi

npm run build

if [ ! -d "dist" ]; then
    echo -e "${RED}오류: 빌드 결과물(dist 디렉터리)이 없습니다.${NC}"
    exit 1
fi

echo -e "${GREEN}빌드 완료!${NC}"
echo ""

# Upload to S3
echo -e "${YELLOW}[2/3] S3에 업로드 중...${NC}"
aws s3 sync dist/ "s3://${S3_BUCKET}" \
    --delete \
    --cache-control "public, max-age=31536000" \
    --exclude "index.html" \
    --exclude "*.json"

# Upload index.html and JSON files with no-cache
aws s3 cp dist/index.html "s3://${S3_BUCKET}/index.html" \
    --cache-control "no-cache, no-store, must-revalidate"

# Upload any JSON files (like manifest) with shorter cache
if ls dist/*.json 1> /dev/null 2>&1; then
    for file in dist/*.json; do
        filename=$(basename "$file")
        aws s3 cp "$file" "s3://${S3_BUCKET}/${filename}" \
            --cache-control "public, max-age=3600"
    done
fi

echo -e "${GREEN}S3 업로드 완료!${NC}"
echo ""

# Invalidate CloudFront cache
echo -e "${YELLOW}[3/3] CloudFront 캐시 무효화 중...${NC}"
INVALIDATION_ID=$(aws cloudfront create-invalidation \
    --distribution-id "$DISTRIBUTION_ID" \
    --paths "/*" \
    --query 'Invalidation.Id' \
    --output text)

echo -e "${GREEN}캐시 무효화 요청 완료! (ID: ${INVALIDATION_ID})${NC}"
echo ""

# Summary
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  배포 완료!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "S3 버킷: ${S3_BUCKET}"
echo -e "CloudFront: ${DISTRIBUTION_ID}"
echo -e "Invalidation: ${INVALIDATION_ID}"
echo ""
echo -e "${YELLOW}참고: 캐시 무효화는 완료까지 몇 분이 걸릴 수 있습니다.${NC}"
echo -e "웹사이트: https://careerbloom.kr"
