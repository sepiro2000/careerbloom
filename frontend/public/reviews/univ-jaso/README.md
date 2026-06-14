# [대학 맞춤형] 학과별 자기소개서 클리닉 후기 이미지

이 폴더(`public/reviews/univ-jaso/`)에 이미지를 넣으면 Review 페이지에 자동 표시됩니다.

## 2×3 그리드 (현장 스케치 및 실습 기록)
- `01.jpeg` ~ `06.jpeg`

## 학과별 카드뉴스 (선택)
각 학과 카드의 가로 슬라이더에 넣을 이미지입니다. 준비되면 `src/pages/Review.jsx`의
`univ-jaso` 리뷰 → 해당 학과 `cards: []` 배열에 경로를 추가하세요.

권장 폴더(학과 순서대로):
- `1st_card_news/` 게임콘텐츠과
- `2nd_card_news/` 반려동물과
- `3rd_card_news/` 사진영상미디어과
- `4th_card_news/` 호텔관광과
- `5th_card_news/` 환경조경학과

예: `cards: ['/reviews/univ-jaso/1st_card_news/01.jpeg', ...]`
