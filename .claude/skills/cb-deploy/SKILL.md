---
name: cb-deploy
description: 커리어블룸 사이트를 빌드·배포하거나 Terraform 인프라를 변경할 때 사용. npm build → S3 sync → CloudFront 무효화 파이프라인 실행, Terraform plan 리뷰 후 승인 기반 apply를 안전하게 수행한다. "배포/deploy/빌드 후 올려/S3 업로드/캐시 무효화/인프라 변경/terraform apply/플랜 확인" 요청 시 반드시 이 스킬을 사용할 것. 인증 오류·destroy 항목은 사용자에게 에스컬레이션한다.
---

# cb-deploy — 커리어블룸 배포·인프라 운영

프로덕션 배포와 인프라 변경은 **되돌리기 어렵고 외부에 공개**되므로, 명시적 승인 없이 apply/sync를 실행하지 않는다. 항상 무엇을 바꾸는지 먼저 보여주고 진행한다.

## 환경 상수
- S3 버킷: `career-bloom-kr-frontend`
- CloudFront Distribution ID: `E2NV7AH7XE1RUD` (`scripts/deploy.sh`에 설정됨)
- 리전: `ap-northeast-2` (서울), ACM은 `us-east-1` (CloudFront 요구)
- 도메인: `careerbloom.kr`

## A. 프론트엔드 배포

### 사전 게이트 (반드시 통과)
1. brand-qa 판정이 **PASS**인가? FAIL이면 배포 중단.
2. `cd frontend && npm run build` 재실행 — 최신 `dist/` 보장. 실패 시 중단.

### 배포 실행
권장: 프로젝트 번들 스크립트 사용 (버킷·Distribution ID·무효화가 묶여 있음).
```bash
bash scripts/deploy.sh
```
스크립트가 없거나 단계별 제어가 필요하면 수동:
```bash
cd frontend && npm run build
aws s3 sync dist/ s3://career-bloom-kr-frontend --delete
aws cloudfront create-invalidation --distribution-id E2NV7AH7XE1RUD --paths "/*"
```
- `--delete`는 S3의 잔여 파일을 정리한다(의도 확인 후 사용).
- 무효화 없이는 CloudFront 캐시 때문에 변경이 즉시 반영되지 않는다 — 무효화 단계를 건너뛰지 않는다.

### 배포 후 확인
- 무효화 ID 기록.
- `https://careerbloom.kr` 도달 및 변경 반영 확인(가능하면). 미확인 시 그 사실을 명시.
- 로그를 `_workspace/B_deploy_log.md`에 기록.

## B. Terraform 인프라 변경

**절대 무단 apply 금지.** 절차:
1. `cd terraform`
2. `terraform init` (필요 시), `terraform plan -out=tfplan`
3. plan 출력을 리뷰하고 **리소스별로 생성/변경/파괴를 요약**한다.
   - 특히 `destroy` 또는 `replace`(예: S3 버킷, CloudFront 배포, Route53 레코드)는 **강조 보고** — 데이터 손실·다운타임·도메인 단절 위험.
4. 사용자에게 요약을 제시하고 **명시적 승인**을 받는다.
5. 승인 시에만 `terraform apply tfplan`.

리뷰 시 던질 질문:
- 이 변경이 운영 중인 사이트에 다운타임을 유발하는가?
- 무료/유료 리소스 비용 영향은?
- ACM/Route53/CloudFront 의존 순서가 깨지지 않는가?

## 인증·에러 처리
- AWS 자격증명 오류 시 임의 우회하지 말고 사용자에게 직접 실행을 안내: 프롬프트에 `! aws sso login` 또는 `! aws configure` 입력 권유.
- 빌드/sync/invalidation 실패 시 즉시 중단하고 **어느 단계까지 됐는지** 보고(부분 배포 상태 명확화).
- Terraform apply 중 실패는 상태 잠금/부분 적용 위험 → 자동 재시도 금지, 사용자 에스컬레이션.

## 완료 기준
- 빌드·sync·무효화 3단계 모두 성공 로그 확보.
- 무효화 ID + 배포 시각 기록.
- 인프라 변경 시: plan 요약·승인·apply 결과가 모두 로그에 남음.
