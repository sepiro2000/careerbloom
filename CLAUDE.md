# CLAUDE.md - 커리어블룸 프로젝트

## 프로젝트 개요
커리어블룸(Career Bloom)은 진로/라이프/커리어 코칭 서비스 웹사이트입니다.

## 디렉터리 구조
```
careerbloom/
├── frontend/          # React 프론트엔드 앱
│   ├── src/
│   │   ├── assets/    # 이미지 파일
│   │   ├── components/# 재사용 컴포넌트
│   │   └── pages/     # 페이지 컴포넌트
│   ├── CLAUDE.md      # 프론트엔드 상세 컨텍스트
│   └── README.md      # 프론트엔드 문서
└── terraform/         # AWS 인프라 (Terraform)
    ├── providers.tf   # AWS 프로바이더 설정
    ├── variables.tf   # 입력 변수
    ├── s3.tf          # S3 버킷
    ├── cloudfront.tf  # CloudFront 배포
    ├── route53.tf     # DNS 레코드
    └── outputs.tf     # 출력 값
```

## 기술 스택
- **Frontend**: React + Vite + Tailwind CSS + Framer Motion
- **Infrastructure**: Terraform + AWS (S3, CloudFront, Route53)

## 개발 서버 실행
```bash
cd frontend
npm install
npm run dev
```

## 인프라 배포
```bash
cd terraform
cp terraform.tfvars.example terraform.tfvars
# terraform.tfvars 파일 편집 (ACM ARN, Route53 Zone ID 입력)
terraform init
terraform plan
terraform apply
```

## 프론트엔드 배포
```bash
cd frontend
npm run build
aws s3 sync dist/ s3://career-bloom-kr-frontend --delete
aws cloudfront create-invalidation --distribution-id <DISTRIBUTION_ID> --paths "/*"
```

## 주요 페이지
- `/` - 메인 (Home)
- `/about` - 코치 소개
- `/programs` - 프로그램 안내

## 외부 연동
- 카카오톡 오픈채팅: https://open.kakao.com/o/sgQfJTkh
- 네이버 블로그: https://blog.naver.com/careerbloom
- 인스타그램: https://instagram.com/careerbloom_coach
- 상담 신청 폼: https://forms.gle/rnMFeZuoejL2VxRf8

## AWS 인프라
- **도메인**: careerbloom.kr
- **S3 버킷**: career-bloom-kr-frontend
- **리전**: ap-northeast-2 (서울)
- **ACM**: us-east-1 (CloudFront 요구사항)

## 상세 정보
- 프론트엔드: `frontend/CLAUDE.md`
- 인프라: `terraform/README.md`
