# CLAUDE.md - 커리어블룸 프로젝트 컨텍스트

## 프로젝트 개요
커리어블룸(Career Bloom)은 진로/라이프/커리어 코칭 서비스를 제공하는 웹사이트입니다.

## 기술 스택
- **프레임워크**: React + Vite 5.4.21
- **스타일링**: Tailwind CSS 3
- **애니메이션**: Framer Motion
- **라우팅**: React Router DOM
- **폰트**: Gowun Batang (제목), Pretendard (본문)

## 프로젝트 구조
```
frontend/
├── src/
│   ├── assets/           # 이미지 파일
│   │   ├── careerbloom_logo.png
│   │   ├── home_main.png
│   │   ├── about_me.jpeg
│   │   ├── programs_1.png
│   │   ├── programs_2.jpeg
│   │   ├── programs_3.png
│   │   └── programs_4.png
│   ├── components/
│   │   ├── Header.jsx    # 네비게이션 헤더
│   │   ├── Footer.jsx    # 푸터 (배너 + 연락처)
│   │   └── Layout.jsx    # 레이아웃 래퍼
│   ├── pages/
│   │   ├── Home.jsx      # 메인 페이지
│   │   ├── About.jsx     # 코치 소개 페이지
│   │   └── Programs.jsx  # 프로그램 페이지
│   ├── App.jsx           # 라우터 설정 + ScrollToTop
│   ├── main.jsx          # 엔트리 포인트
│   └── index.css         # 글로벌 스타일 + Tailwind
├── tailwind.config.js    # Tailwind 커스텀 설정
├── vite.config.js        # Vite 설정 (host: true)
└── index.html            # HTML 템플릿 + 폰트 로드
```

## 커스텀 컬러 팔레트
- `cream`: #FAF7F2 (배경)
- `sage`: #8BA888 (주요 색상 - 초록)
- `coral`: #E8A598 (보조 색상 - 분홍)
- `terracotta`: #C4907A (강조 색상)
- `charcoal`: #3D3D3D (텍스트)
- `warm-gray`: #8A8378 (보조 텍스트)

## 페이지별 구성

### Home
- Hero 섹션: 메인 카피 + 일러스트 이미지
- Philosophy 섹션: 코칭 철학 + 나무 일러스트
- Programs Preview: 4개 프로그램 카드
- Contact 섹션: SNS 링크 (카카오톡, 블로그, 인스타그램)

### About
- 코치 프로필 (김아름)
- 학력, 경력, 자격사항
- 핵심 역량 3가지
- 코칭 철학 인용구

### Programs (4개 프로그램)
1. **1:1 진로 코칭**: Type A (진단형), Type B (대화형)
2. **진로긍정학**: 4주 과정 (강점, 회복, 결정, 비전)
3. **라이프 디자인**: Theme 1~3 (흥미, 강점, 가치관)
4. **실전 취업 솔루션**: Option 1 (서류), Option 2 (면접)

## 외부 링크
- 카카오톡 오픈채팅: https://open.kakao.com/o/sgQfJTkh
- 네이버 블로그: https://blog.naver.com/careerbloom
- 인스타그램: https://instagram.com/careerbloom_coach
- 상담 신청 폼: https://forms.gle/careerbloom
- 진로긍정학 블로그 포스트: https://blog.naver.com/careerbloom/224149348137

## 주요 구현 사항
- 반응형 디자인 (모바일/태블릿/데스크톱)
- 페이지 전환 시 스크롤 최상단 이동 (ScrollToTop)
- 네트워크 접속 허용 (vite.config.js의 host: true)
- Framer Motion 애니메이션 (fade-in, slide 효과)
- CSS 키프레임 애니메이션 (scrollBounce)

## 주의사항
- 장식 요소에 `pointer-events-none` 필수 (버튼 클릭 방해 방지)
- 모바일에서 버튼 정렬 시 `items-center` 추가 필요
- 헤더 높이 h-24에 맞춰 페이지 상단 패딩 pt-24 설정
