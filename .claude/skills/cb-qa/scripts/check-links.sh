#!/bin/bash
# cb-qa 외부 링크 추출 + 도달성 점검
# 사용법: bash .claude/skills/cb-qa/scripts/check-links.sh [SRC_DIR]
# 코드 내 모든 http(s) URL을 추출해 정렬·중복제거 후, curl로 상태코드 확인.

set -uo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$SCRIPT_DIR/../../../.." && pwd)"
SRC="${1:-$ROOT/frontend/src}"

echo "=================================================="
echo " cb-qa 외부 링크 점검  ($SRC)"
echo "=================================================="

URLS=$(grep -rhoE 'https?://[a-zA-Z0-9./?=_%:#&-]+' "$SRC" --include='*.jsx' --include='*.tsx' 2>/dev/null \
  | sed -E 's/["`'"'"'),]+$//' | sort -u)

if [ -z "$URLS" ]; then
  echo "코드 내 외부 URL 없음"
  exit 0
fi

echo
echo "추출된 고유 외부 URL:"
echo "$URLS" | sed 's/^/  - /'
echo
echo "--- 도달성 (HEAD, 타임아웃 10s; 네트워크 없으면 SKIP 표기) ---"

if ! command -v curl >/dev/null 2>&1; then
  echo "  curl 미설치 — 도달성 점검 SKIP. URL 형식만 위에서 육안 확인."
  exit 0
fi

while IFS= read -r url; do
  [ -z "$url" ] && continue
  code=$(curl -A "Mozilla/5.0 cb-qa" -s -o /dev/null -w "%{http_code}" -L --max-time 10 --head "$url" 2>/dev/null || echo "ERR")
  case "$code" in
    2*|3*) status="OK   ($code)";;
    000|ERR) status="UNREACH (네트워크/차단 가능 — 코드상 URL 형식은 별도 확인)";;
    405|403) status="OK?  ($code: HEAD 차단일 수 있음, 실브라우저 확인 권장)";;
    *)     status="⚠ FAIL ($code)";;
  esac
  printf "  [%s] %s\n" "$status" "$url"
done <<< "$URLS"

echo
echo "참고: 정본 외부 링크 목록은 frontend/CLAUDE.md '외부 링크' 절."
echo "      추출 URL과 정본 목록을 대조해 오타/구버전/누락을 교차 확인할 것."
echo "=================================================="
exit 0
