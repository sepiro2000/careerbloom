#!/bin/bash
# cb-qa 브랜드 위반 정적 점검 — grep 기반 결정적 탐지
# 사용법: bash .claude/skills/cb-qa/scripts/check-brand.sh [SRC_DIR]
# 기본 SRC_DIR = frontend/src

set -uo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$SCRIPT_DIR/../../../.." && pwd)"
SRC="${1:-$ROOT/frontend/src}"

echo "=================================================="
echo " cb-qa 브랜드 정적 점검  ($SRC)"
echo "=================================================="
FOUND=0

echo
echo "[1] className 내 하드코딩 HEX (토큰으로 대체 권장)"
echo "    * 예외: index.css 변수 정의부, SVG stop-color, 그리고 외부 SNS 공식 브랜드 컬러"
echo "      (카카오 #FEE500, 네이버 #03C75A, 인스타 #833AB4/#FD1D1D/#FCAF45 등)는 의도적 — 위반 아님"
# jsx/tsx의 className 문자열에서 #RRGGBB 패턴 탐지. 알려진 SNS 공식 컬러는 정당한 예외라 제외.
SNS_HEX='FEE500|03C75A|833AB4|FD1D1D|FCAF45|FCB045|405DE6|5851DB|C13584|E1306C|1877F2|000000|FFFFFF'
HITS=$(grep -rniE 'className=("|`)[^"`]*#[0-9a-f]{3,6}' "$SRC" --include='*.jsx' --include='*.tsx' 2>/dev/null \
  | grep -viE "#($SNS_HEX)" || true)
if [ -n "$HITS" ]; then
  echo "$HITS"
  echo "    ⚠ 위 HEX는 브랜드 토큰(sage/coral/...)으로 대체 검토. SNS 공식 컬러면 예외 추가."
  FOUND=1
else
  echo "    OK — SNS 공식 컬러를 제외하면 className 하드코딩 HEX 없음"
fi

echo
echo "[2] 비표준 폰트 클래스 (font-serif/font-sans/heading-display 외)"
if grep -rnoE 'font-(mono|\[[^]]+\])' "$SRC" --include='*.jsx' --include='*.tsx' 2>/dev/null; then
  FOUND=1
else
  echo "    OK — 비표준 폰트 클래스 없음"
fi

echo
echo "[3] 외부 링크 보안 속성 점검 (target=_blank 인데 rel 누락 가능)"
# target="_blank" 가 있는 라인 나열 → 수동으로 rel 동반 여부 확인
BLANK=$(grep -rn 'target="_blank"' "$SRC" --include='*.jsx' --include='*.tsx' 2>/dev/null || true)
if [ -n "$BLANK" ]; then
  echo "$BLANK"
  MISSING=$(grep -rL 'rel="noopener' $(grep -rl 'target="_blank"' "$SRC" --include='*.jsx' --include='*.tsx' 2>/dev/null) 2>/dev/null || true)
  if [ -n "$MISSING" ]; then
    echo "    ⚠ 위 파일 중 rel=\"noopener...\" 미포함 파일:"
    echo "$MISSING"
    FOUND=1
  else
    echo "    OK — target=_blank 사용처 모두 rel 동반"
  fi
else
  echo "    (target=_blank 사용처 없음)"
fi

echo
echo "[4] 절대배치 장식 후보 — pointer-events-none 동반 여부 수동 확인 필요"
echo "    아래 'absolute ... blur/gradient' 라인이 클릭 요소를 덮지 않는지 확인:"
grep -rnE 'className=("|`)[^"`]*absolute[^"`]*(blur|gradient|blob)' "$SRC" --include='*.jsx' --include='*.tsx' 2>/dev/null | head -40 || echo "    (해당 없음)"

echo
echo "[5] <img> alt 누락 점검"
if grep -rnE '<img\b' "$SRC" --include='*.jsx' --include='*.tsx' 2>/dev/null | grep -v 'alt=' ; then
  echo "    ⚠ 위 <img> 에 alt 누락 가능"
  FOUND=1
else
  echo "    OK — <img> alt 누락 의심 없음"
fi

echo
echo "=================================================="
if [ "$FOUND" -eq 0 ]; then
  echo " 정적 점검 통과 (수동 항목 [4]는 별도 확인)"
else
  echo " ⚠ 위반/의심 항목 발견 — 리포트에 반영"
fi
echo "=================================================="
exit 0
