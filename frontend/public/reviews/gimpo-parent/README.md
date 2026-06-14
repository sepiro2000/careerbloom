# 김포시청소년상담복지센터 워크숍 후기 이미지

이 폴더에 이미지를 넣으면 Review 페이지에 자동으로 표시됩니다.
(Vite `public/` 폴더라 빌드/임포트 없이 경로로 바로 참조됩니다.)

## 2×3 그리드 (현장 사진 6장)
다음 파일명으로 저장하세요:

- `01.jpg`
- `02.jpg`
- `03.jpg`
- `04.jpg`
- `05.jpg`
- `06.jpg`

확장자가 png 등으로 다르면 `src/pages/Review.jsx`의 `gallery` 배열 경로만 바꾸면 됩니다.

## 회기별 카드뉴스 (선택)
각 회기 카드의 가로 슬라이더에 넣을 이미지입니다. 준비되면 `Review.jsx`의
해당 세션 `cards: []` 배열에 경로를 추가하세요. 예:

```js
cards: [
  '/reviews/gimpo-parent-2024/s1-01.jpg',
  '/reviews/gimpo-parent-2024/s1-02.jpg',
],
```

권장 네이밍: `s{회기번호}-{순번}.jpg` (예: `s1-01.jpg`, `s2-01.jpg` …)
