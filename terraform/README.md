# CareerBloom Terraform Infrastructure

AWS 인프라를 Terraform으로 관리합니다.

## 구성 요소

- **S3 Bucket**: React 빌드 결과물 저장
- **CloudFront**: CDN 및 HTTPS 서비스
- **Route53**: DNS 레코드 관리
- **OAC**: CloudFront에서 S3 접근을 위한 Origin Access Control

## 사전 준비

1. AWS CLI 설정
2. Terraform 설치 (>= 1.0)
3. ACM 인증서 생성 (us-east-1 리전에서)
4. Route53 호스팅 영역 생성
5. Terraform State 저장용 S3 버킷 생성

### State 버킷 생성

Terraform 상태 파일을 저장할 S3 버킷을 먼저 생성해야 합니다:

```bash
aws s3 mb s3://career-bloom-kr-terraform-state-apne2 --region ap-northeast-2

# 버전 관리 활성화 (권장)
aws s3api put-bucket-versioning \
  --bucket career-bloom-kr-terraform-state-apne2 \
  --versioning-configuration Status=Enabled
```

## 사용 방법

### 1. 변수 설정

```bash
cp terraform.tfvars.example terraform.tfvars
```

`terraform.tfvars` 파일을 편집하여 값을 입력:
- `acm_certificate_arn`: us-east-1 리전의 ACM 인증서 ARN
- `route53_zone_id`: Route53 호스팅 영역 ID

### 2. 초기화

```bash
terraform init
```

### 3. 계획 확인

```bash
terraform plan
```

### 4. 적용

```bash
terraform apply
```

## 프론트엔드 배포

### 배포 스크립트 사용 (권장)

```bash
cd ..
./scripts/deploy.sh
```

배포 스크립트가 자동으로 처리하는 작업:
1. 프론트엔드 빌드 (`npm run build`)
2. S3 업로드 (적절한 캐시 헤더 설정)
3. CloudFront 캐시 무효화

### 수동 배포

```bash
cd ../frontend
npm run build

# S3에 업로드
aws s3 sync dist/ s3://career-bloom-kr-frontend --delete

# CloudFront 캐시 무효화
aws cloudfront create-invalidation \
  --distribution-id $(terraform -chdir=../terraform output -raw cloudfront_distribution_id) \
  --paths "/*"
```

## 출력값

| 이름 | 설명 |
|------|------|
| `s3_bucket_name` | S3 버킷 이름 |
| `cloudfront_distribution_id` | CloudFront 배포 ID |
| `cloudfront_domain_name` | CloudFront 도메인 |
| `website_url` | 웹사이트 URL |

## 주의사항

- ACM 인증서는 반드시 **us-east-1** 리전에 생성해야 합니다 (CloudFront 요구사항)
- 인증서에 `careerbloom.kr`과 `www.careerbloom.kr` 도메인이 포함되어야 합니다
