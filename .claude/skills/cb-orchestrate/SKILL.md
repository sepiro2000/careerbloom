---
name: cb-orchestrate
description: 커리어블룸 사이트 작업을 콘텐츠 제작 → 품질검증(QA) → 빌드·배포 파이프라인으로 조율하는 오케스트레이터. content-builder·brand-qa·deploy-operator 에이전트를 하이브리드(팀+서브)로 운용한다. "사이트 작업/페이지 추가하고 배포까지/콘텐츠 만들고 검증해서 올려줘/전체 파이프라인/커리어블룸 업데이트" 등 2단계 이상 협업 요청 시 사용. 후속 작업("다시 실행/재실행/업데이트/수정/보완/QA만 다시/배포만 다시/이전 결과 기반으로 개선")도 이 스킬로 처리한다. 단순 단일 작업(콘텐츠만/QA만/배포만)은 각 전용 스킬(cb-content/cb-qa/cb-deploy)을 직접 사용해도 된다.
---

# cb-orchestrate — 커리어블룸 통합 파이프라인 오케스트레이터

콘텐츠 제작 → QA → 배포를 하나의 워크플로우로 조율한다. **실행 모드는 하이브리드**다:
- **Phase A (제작+검증)**: 에이전트 팀 — content-builder ↔ brand-qa 점진적 협업.
- **Phase B (배포)**: 서브 에이전트 — deploy-operator 단독.

모든 Agent 호출은 `model: "opus"`, 타입은 `general-purpose`로 한다.

## Phase 0: 컨텍스트 확인 (실행 모드 판별)
작업 시작 전 `_workspace/` 존재 여부와 요청 성격으로 분기한다.
- `_workspace/` 없음 → **초기 실행** (Phase A부터).
- `_workspace/` 있음 + 부분 수정 요청("QA만 다시", "배포만") → **부분 재실행** (해당 Phase/에이전트만 호출).
- `_workspace/` 있음 + 새 입력/새 작업 → **새 실행** (기존 `_workspace/`를 `_workspace_prev/`로 이동 후 시작).

또한 요청 범위를 판별한다: 콘텐츠만이면 cb-content 단독, QA만이면 cb-qa 단독, 배포만이면 cb-deploy 단독으로 위임하고 전체 파이프라인을 돌리지 않는다(과잉 실행 방지).

## Phase 1: 작업 정의
- 사용자 요청을 작업 단위로 분해(예: "Programs에 신규 프로그램 추가 + 배포" → 콘텐츠 1건 + QA + 배포).
- 작업 디렉토리에 `_workspace/`를 만든다(없으면).
- 규모에 맞는 팀 크기 결정(소규모 기본: content-builder + brand-qa 2명).

## Phase 2: 제작 + 검증 (실행 모드: 에이전트 팀)
1. `TeamCreate`로 팀 구성: `content-builder`, `brand-qa`.
2. `TaskCreate`로 작업과 의존성 등록(콘텐츠 작업 → 해당 QA 작업).
3. 팀원 자체 조율:
   - content-builder가 모듈 완성 → `SendMessage`로 brand-qa에 검증 요청(점진적 QA).
   - brand-qa가 위반 발견 → `SendMessage`로 심각도·위치·수정안 회신 → content-builder 수정 → 재검증.
4. 종료 조건: brand-qa가 **PASS**(Blocker 0 + Major 해소) 판정.
5. 산출물:
   - `_workspace/A_content_changes.md` (변경 파일·요약)
   - `_workspace/A_qa_report.md` (검증 리포트 + PASS/FAIL)
6. 팀 정리(`TeamDelete`) 후 Phase 3로.

**데이터 전달**: 태스크 기반(조율) + 메시지 기반(실시간) + 파일 기반(`_workspace/` 산출물).

## Phase 3: 배포 (실행 모드: 서브 에이전트)
배포는 사용자가 명시적으로 요청했거나 승인했을 때만 진행한다(외부 공개·비가역).
1. Phase A가 PASS인지 확인(`A_qa_report.md`). FAIL이면 배포하지 않고 사용자에게 보고.
2. `Agent` 도구로 `deploy-operator` 호출(`model: "opus"`, `general-purpose`). 입력: 배포 대상 + PASS 근거.
3. deploy-operator는 cb-deploy 스킬에 따라 빌드 게이트 → 배포 → 무효화, **Terraform 변경은 plan 승인 후** 수행.
4. 산출물: `_workspace/B_deploy_log.md` (명령·결과·무효화 ID).

**데이터 전달**: 반환값 기반(결과 수집) + 파일 기반(로그).

## Phase 4: 종합 및 피드백
- 세 산출물(`A_content_changes.md`, `A_qa_report.md`, `B_deploy_log.md`)을 종합해 사용자에게 보고.
- 피드백 요청: "결과에서 개선할 부분이 있나요? 팀 구성/워크플로우에 바꾸고 싶은 점은?" (강요하지 않음)
- 피드백 유형별 반영: 결과 품질→해당 스킬, 역할→에이전트 정의, 순서→이 오케스트레이터. 변경은 `CLAUDE.md` 변경 이력에 기록.

## 에러 핸들링
- **에이전트 1회 재시도 후 재실패** → 해당 결과 없이 진행하고 최종 보고서에 누락 명시.
- **상충 데이터**(예: QA와 빌더 의견 충돌) → 삭제하지 말고 출처 병기해 사용자 판단에 맡김.
- **빌드 실패** → Phase 2에서 차단, 배포로 진행 금지.
- **AWS 인증/Terraform destroy** → 자동 진행 금지, 사용자 에스컬레이션.
- 중간 파일(`_workspace/`)은 보존(사후 검증·감사 추적).

## 테스트 시나리오

### 정상 흐름
요청: "Programs 페이지에 '온라인 그룹 코칭' 프로그램 카드를 추가하고 검증 후 배포해줘."
1. Phase 0: `_workspace/` 없음 → 초기 실행. 범위: 콘텐츠+QA+배포 전체.
2. Phase 2: 팀 생성. content-builder가 기존 프로그램 카드 패턴을 모방해 카드 추가 → brand-qa가 브랜드 토큰·반응형·링크 검증 → Minor 1건 수정 → PASS.
3. Phase 3: deploy-operator가 빌드→S3 sync→무효화. 무효화 ID 기록.
4. Phase 4: 종합 보고 + 피드백 요청.

### 에러 흐름
요청: "About 페이지 수정하고 바로 배포."
1. Phase 2: content-builder 수정 중 import 오타로 `npm run build` 실패 → 1회 자체 수정 시도 → 성공. (재실패였다면 배포 차단하고 보고.)
2. brand-qa가 장식 div `pointer-events-none` 누락(Blocker) 발견 → 수정 → 재검증 PASS.
3. Phase 3: deploy-operator가 `aws s3 sync` 인증 오류 → 자동 우회 금지, 사용자에게 `! aws sso login` 안내 후 재개.

## 후속 작업 처리
- "QA만 다시" → Phase 2의 brand-qa만 단독 호출(부분 재실행), `A_qa_report.md`의 regression 우선 점검.
- "배포만 다시" → Phase 3만 실행, `B_deploy_log.md`로 중복 배포 회피.
- "이전 결과 기반 개선" → 기존 `_workspace/` 산출물을 각 에이전트가 읽고 개선점만 반영.
