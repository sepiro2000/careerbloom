# 커리어블룸 (Career Bloom)

> 흩어진 당신의 가능성을 모아, 가장 '나다운' 길을 설계합니다.

진로, 라이프, 커리어 코칭 서비스 웹사이트입니다.

## 기술 스택

- **React** - UI 라이브러리
- **Vite** - 빌드 도구
- **Tailwind CSS** - 스타일링
- **Framer Motion** - 애니메이션
- **React Router** - 클라이언트 사이드 라우팅

## 시작하기

### 요구사항
- Node.js 18.x 이상

### 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드 미리보기
npm run preview
```

### 개발 서버
개발 서버는 기본적으로 `http://localhost:5173`에서 실행됩니다.

같은 네트워크의 다른 기기에서 접속하려면 터미널에 표시되는 Network URL을 사용하세요.

## 프로젝트 구조

```
src/
├── assets/          # 이미지 파일
├── components/      # 재사용 컴포넌트
│   ├── Header.jsx   # 네비게이션
│   ├── Footer.jsx   # 푸터
│   └── Layout.jsx   # 레이아웃
├── pages/           # 페이지 컴포넌트
│   ├── Home.jsx     # 메인
│   ├── About.jsx    # 코치 소개
│   └── Programs.jsx # 프로그램
├── App.jsx          # 라우터 설정
├── main.jsx         # 엔트리 포인트
└── index.css        # 글로벌 스타일
```

## 페이지 구성

### Home (/)
- Hero 섹션 - 메인 비주얼 및 카피
- Philosophy 섹션 - 코칭 철학
- Programs 섹션 - 프로그램 미리보기 (4개)
- Contact 섹션 - SNS 및 연락처

### About (/about)
- 코치 프로필 (김아름)
- 학력 및 경력
- 핵심 역량
- 코칭 철학 인용구

### Programs (/programs)
1. **1:1 진로 코칭** - 개인 맞춤 진로 탐색
2. **진로긍정학** - 4주 시그니처 프로그램
3. **라이프 디자인** - 삶의 균형과 가치관 탐색
4. **실전 취업 솔루션** - 서류/면접 코칭

## 디자인 시스템

### 컬러 팔레트
| 색상 | Hex | 용도 |
|------|-----|------|
| Cream | #FAF7F2 | 배경 |
| Sage | #8BA888 | 주요 색상 |
| Coral | #E8A598 | 보조 색상 |
| Terracotta | #C4907A | 강조 색상 |
| Charcoal | #3D3D3D | 텍스트 |

### 폰트
- **Gowun Batang** - 제목 (세리프)
- **Pretendard** - 본문 (산세리프)

## 연락처

- **카카오톡**: [오픈채팅](https://open.kakao.com/o/sgQfJTkh)
- **블로그**: [네이버 블로그](https://blog.naver.com/careerbloom)
- **인스타그램**: [@careerbloom_coach](https://instagram.com/careerbloom_coach)
- **이메일**: kar4823@nate.com

## 라이선스

© 2026 Career Bloom. All rights reserved.
