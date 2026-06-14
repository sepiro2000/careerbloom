---
name: cb-content
description: 커리어블룸 마케팅 사이트의 페이지·섹션·컴포넌트를 React+Tailwind+Framer Motion으로 제작/편집할 때 사용. 브랜드 컬러 토큰, Gowun Batang/Pretendard 폰트, 모션 변수 패턴, 알려진 함정(pointer-events, pt-24, 반응형)을 적용한다. 새 섹션 추가, 프로그램/소개 콘텐츠 수정, 카피라이팅, 애니메이션 작업, "페이지 만들어/섹션 추가/콘텐츠 수정/카피 바꿔" 요청 시 반드시 이 스킬을 사용할 것.
---

# cb-content — 커리어블룸 콘텐츠 제작

커리어블룸 사이트의 룩앤필을 일관되게 유지하며 페이지·섹션을 제작한다. 핵심은 **새 패턴 발명이 아니라 기존 패턴 모방**이다 — 작업 전 같은 종류의 기존 페이지(`frontend/src/pages/Home.jsx`, `Programs.jsx`, `About.jsx`)를 먼저 읽고 구조를 맞춘다.

## 작업 절차
1. 대상 파일과 가장 가까운 기존 페이지/섹션을 읽는다.
2. 아래 브랜드 시스템·패턴에 맞춰 구현한다.
3. "알려진 함정"을 점검한다.
4. `cd frontend && npm run build`로 빌드 통과를 확인한다 — 이게 완료 기준이다.

## 브랜드 시스템 (반드시 토큰 사용, HEX 하드코딩 금지)

**컬러 토큰** (`tailwind.config.js`에 정의):
| 토큰 | 용도 |
|------|------|
| `cream` / `cream-dark` / `soft-white` | 배경 |
| `sage` / `sage-light` / `sage-dark` | 주요 색상(초록) — 강조, CTA 보더, 밑줄 |
| `coral` / `coral-light` / `coral-dark` | 보조 색상(분홍) — 그라데이션, 포인트 |
| `terracotta` | 강조 |
| `charcoal` | 본문 텍스트 |
| `warm-gray` | 보조 텍스트 |

투명도는 `sage/10`, `coral-light/20` 처럼 슬래시 표기를 쓴다. 그라데이션은 `from-sage to-coral-light` 조합이 브랜드 시그니처다.

**폰트**:
- 제목/디스플레이: `font-serif` (Gowun Batang) — `heading-display` 유틸 클래스도 존재.
- 본문/UI: `font-sans` (Pretendard).

**그라데이션·텍스처 유틸**(`index.css` 정의): `gradient-hero`, `gradient-section`, `gradient-sage`, `texture-grain`, `blob-shape`, `btn-primary`. 새로 만들기 전에 `index.css`를 확인해 재사용한다.

## 레이아웃 관례
- 섹션 컨테이너: `max-w-7xl mx-auto px-4 lg:px-8` (헤더/푸터는 `max-w-6xl`). 기존 파일의 값을 따른다.
- 섹션 래퍼: `<section className="... gradient-section">` 형태, 상하 패딩 `py-16`~`py-24`.
- 카드: 둥근 모서리(`rounded-2xl`/`rounded-3xl`), 부드러운 그림자(`shadow-[0_4px_30px_rgba(139,168,136,0.08)]` 계열의 sage 틴트).

## Framer Motion 패턴
페이지 상단에 모션 변수를 선언해 재사용한다(`Home.jsx` 참조):
```jsx
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
};
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.15 } }
};
```
- 진입 애니메이션: `variants={fadeInUp}` + 부모에 `staggerContainer`.
- 스크롤 트리거가 필요하면 `whileInView` + `viewport={{ once: true }}`.
- 배경 떠다니는 도형: `animate={{ y:[...], rotate:[...] }}` 무한 반복 + **`pointer-events-none` 컨테이너 안에** 둔다.

## 알려진 함정 (이유와 함께)
이유를 이해하면 비슷한 상황에서도 올바르게 판단할 수 있다.
- **장식 요소 `pointer-events-none`**: 떠다니는 blur 도형/SVG가 버튼·링크 위를 덮으면 클릭이 막힌다. 모든 절대배치 장식 컨테이너에 필수.
- **헤더 높이 보정 `pt-24`**: 헤더가 `fixed h-24`라 페이지 최상단 콘텐츠가 가려진다. 페이지/Hero 상단에 `pt-24`(또는 그 이상) 패딩.
- **모바일 버튼 정렬 `items-center`**: flex 컬럼에서 버튼이 좌측으로 쏠린다. 중앙 정렬 필요 시 `items-center` 추가.
- **외부 링크**: 새 외부 링크는 `target="_blank" rel="noopener noreferrer"` 세트로. 공식 링크 목록은 `frontend/CLAUDE.md` "외부 링크" 절을 단일 출처로 삼는다.
- **반응형**: 모바일 우선. `grid lg:grid-cols-[...]`, `text-3xl md:text-4xl lg:text-5xl`처럼 분기를 명시한다. 데스크톱만 보고 끝내지 않는다.

## 카피라이팅 톤
- 따뜻하고 단정한 한국어. 코칭 브랜드의 정서(가능성·성장·'나다움')를 유지한다.
- 과장·클릭베이트 지양. 기존 카피의 어조(예: "흩어진 당신의 가능성을 모아, 가장 '나다운'")와 결을 맞춘다.

## 완료 기준
- `npm run build` 통과 (import·미사용 변수 오류 없음).
- 브랜드 토큰만 사용, 폰트 규칙 준수.
- 반응형 분기 존재, 알려진 함정 점검 완료.
- 변경 파일·요약을 `_workspace/A_content_changes.md`에 기록(팀 모드).
