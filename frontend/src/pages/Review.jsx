import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 리뷰 데이터 — 여기에 객체를 추가하면 자동으로 새 후기 카드가 등록된다.
const reviews = [
  {
    id: 'gimpo-parent',
    category: '부모교육 · 5회기',
    org: '김포시청소년상담복지센터',
    title: '<엄마의 긍정이 아이의 이정표가 된다> 워크숍 운영 후기',
    satisfaction: 5.0,
    sessionsTitle: '변화의 설계도 : 5주간의 커리큘럼',
    intro:
      '김포시청소년상담복지센터에서 학부모님들을 대상으로 5회기 집단상담 워크숍을 진행했습니다. 본 과정은 일방적인 지식 전달을 넘어 [워크시트 실습 → 소그룹 나눔 → 성장 맞춤형 가이드]의 3단계 프로세스를 통해, 부모 스스로 마음의 닻을 내리고 나다운 양육 철학을 세우도록 돕는 커리어블룸의 시그니처 프로그램입니다.',
    quote:
      "나를 의미 있고 가치 있는 사람으로 느끼게 해준 '여행의 가이드'를 만난 기분입니다. 일방적인 강의가 아니라 함께 소통하며 나 자신을 깊이 들여다볼 수 있어 정말 좋았습니다.",
    // 2×3 그리드에 들어갈 6장. public/reviews/gimpo-parent/ 의 파일을 참조한다.
    gallery: [
      { src: '/reviews/gimpo-parent/01.jpeg', label: '01.jpeg' },
      { src: '/reviews/gimpo-parent/02.jpeg', label: '02.jpeg' },
      { src: '/reviews/gimpo-parent/03.jpeg', label: '03.jpeg' },
      { src: '/reviews/gimpo-parent/04.jpeg', label: '04.jpeg' },
      { src: '/reviews/gimpo-parent/05.jpeg', label: '05.jpeg' },
      { src: '/reviews/gimpo-parent/06.jpeg', label: '06.jpeg' },
    ],
    sessions: [
      {
        round: '1회기',
        title: "타고난 나의 밑그림 이해하기 (기질과 성격)",
        desc: "그동안 지우개로 벅벅 문질러 없애버리고 싶었던 아이의 타고난 '밑그림(기질)'을 있는 그대로 인정하고 수용하는 시간.",
        cards: [], // 1회기 카드뉴스 폴더(1st_card_news) 미제공 — 추가되면 경로를 넣으면 됨
        blogUrl: 'https://blog.naver.com/careerbloom/224262659746',
        instaUrl: 'https://www.instagram.com/p/DXd6CIpgdMF/?img_index=1',
      },
      {
        round: '2회기',
        title: "내가 가진 강력한 무기 '강점' 발견하기",
        desc: '3H 엔진(Head, Heart, Hand) 분석으로 양육의 가성비를 높이고, 아이의 미운 행동을 눈부신 강점의 언어로 전환하는 기질-강점 통역 가이드.',
        cards: [
          '/reviews/gimpo-parent/2nd_card_news/01.jpeg',
          '/reviews/gimpo-parent/2nd_card_news/02.jpeg',
          '/reviews/gimpo-parent/2nd_card_news/03.jpeg',
          '/reviews/gimpo-parent/2nd_card_news/04.jpeg',
          '/reviews/gimpo-parent/2nd_card_news/05.jpeg',
          '/reviews/gimpo-parent/2nd_card_news/06.jpeg',
        ],
        blogUrl: 'https://blog.naver.com/careerbloom/224271863057',
        instaUrl: 'https://www.instagram.com/p/DX4BIrHAaqz/?img_index=1',
      },
      {
        round: '3회기',
        title: "무너져도 다시 일어나는 '회복탄력성의 비밀'",
        desc: "불안한 '비교 미어캣'에서 벗어나 자책의 닫힌 문을 닫고, 성장의 열린 창문을 찾아 '중심 잡는 사자'로 변화하는 마음 근력 훈련.",
        cards: [
          '/reviews/gimpo-parent/3rd_card_news/01.jpeg',
          '/reviews/gimpo-parent/3rd_card_news/02.jpeg',
          '/reviews/gimpo-parent/3rd_card_news/03.jpeg',
          '/reviews/gimpo-parent/3rd_card_news/04.jpeg',
          '/reviews/gimpo-parent/3rd_card_news/05.jpeg',
          '/reviews/gimpo-parent/3rd_card_news/06.jpeg',
          '/reviews/gimpo-parent/3rd_card_news/07.jpeg',
        ],
        blogUrl: 'https://blog.naver.com/careerbloom/224276274000',
        instaUrl: 'https://www.instagram.com/p/DYBNv8Wgajb/?img_index=1',
      },
      {
        round: '4회기',
        title: "흔들리지 않는 삶의 기준 '결정의 기술'",
        desc: "최고만 고집하는 최대자의 함정에서 탈출하여, 아이를 협력의 파트너로 삼고 '구매 동의서'로 함께 정답을 만들어가는 행복한 선택의 기술.",
        cards: [
          '/reviews/gimpo-parent/4th_card_news/01.jpeg',
          '/reviews/gimpo-parent/4th_card_news/02.jpeg',
          '/reviews/gimpo-parent/4th_card_news/03.jpeg',
          '/reviews/gimpo-parent/4th_card_news/04.jpeg',
          '/reviews/gimpo-parent/4th_card_news/05.jpeg',
          '/reviews/gimpo-parent/4th_card_news/06.jpeg',
        ],
        blogUrl: 'https://blog.naver.com/careerbloom/224286318857',
        instaUrl: 'https://www.instagram.com/p/DYMmhh1gara/?img_index=1',
      },
      {
        round: '5회기',
        title: '엄마의 꿈이 아이의 이정표 (라이프 시그니처)',
        desc: "가치관 경매를 통해 삶의 우선순위를 낙찰받고, 아이에게 당당한 뒷모습을 보여줄 나만의 '긍정 유산 선언문' 완성.",
        cards: [
          '/reviews/gimpo-parent/5th_card_news/01.jpeg',
          '/reviews/gimpo-parent/5th_card_news/02.jpeg',
          '/reviews/gimpo-parent/5th_card_news/03.jpeg',
          '/reviews/gimpo-parent/5th_card_news/04.jpeg',
          '/reviews/gimpo-parent/5th_card_news/05.jpeg',
          '/reviews/gimpo-parent/5th_card_news/06.jpeg',
        ],
        blogUrl: 'https://blog.naver.com/careerbloom/224286318857',
        instaUrl: 'https://www.instagram.com/p/DYWKSeDmoEi/?img_index=1',
      },
    ],
  },
  {
    id: 'univ-jaso',
    category: '대학 맞춤형 · 자기소개서 클리닉',
    title: '[대학 맞춤형] 학과별 타겟팅 자기소개서 클리닉 운영 후기',
    sessionsTitle: '🎯 전공을 무기로: 학과별 타겟팅 전략',
    intro:
      "한 대학교의 5개 학과 재학생들을 대상으로 '직무 역량 기반 자기소개서 클리닉'을 진행했습니다. 학과마다 요구되는 역량은 다르지만, '나의 경험을 기업이 원하는 언어로 번역한다'는 핵심 틀은 동일하게 적용했습니다. 학생들 개개인이 자신의 전공 특성을 살려 매력적인 자소서를 완성할 수 있도록 맞춤형 예시와 1:1 피드백을 중심으로 운영된 워크숍입니다.",
    meta: [
      {
        label: '진행 방식',
        value: '직무 키워드 분석 → 경험 매칭(STAR 기법) → 학과별 맞춤형 에피소드 구조화 → 1:1 컨설팅',
      },
      {
        label: '참여 학과',
        value: '게임콘텐츠과, 반려동물과, 사진영상미디어과, 호텔관광과, 환경조경학과',
      },
    ],
    // 2×3 그리드용. public/reviews/univ-jaso/ 에 01~06 이미지를 넣으면 자동 표시된다.
    gallery: [
      { src: '/reviews/univ-jaso/01.jpeg', label: '01.jpeg' },
      { src: '/reviews/univ-jaso/02.jpeg', label: '02.jpeg' },
      { src: '/reviews/univ-jaso/03.jpeg', label: '03.jpeg' },
      { src: '/reviews/univ-jaso/04.jpeg', label: '04.jpeg' },
      { src: '/reviews/univ-jaso/05.jpeg', label: '05.jpeg' },
      { src: '/reviews/univ-jaso/06.jpeg', label: '06.jpeg' },
    ],
    sessions: [
      {
        round: '🎮 게임콘텐츠과',
        title: '너의 경험, 킬러 콘텐츠가 된다',
        desc: "게임 기획적 분석력을 바탕으로 나의 경험을 데이터화하여, 기업이 탐내는 '브랜드'로 스토리텔링하는 법.",
        cards: [
          '/reviews/univ-jaso/1st_card_news/01.jpeg',
          '/reviews/univ-jaso/1st_card_news/02.jpeg',
          '/reviews/univ-jaso/1st_card_news/03.jpeg',
          '/reviews/univ-jaso/1st_card_news/04.jpeg',
          '/reviews/univ-jaso/1st_card_news/05.jpeg',
          '/reviews/univ-jaso/1st_card_news/06.jpeg',
        ],
        blogUrl: 'https://blog.naver.com/careerbloom/224045600632',
        instaUrl: 'https://www.instagram.com/p/DQGE4KSAZWE/?img_index=1',
      },
      {
        round: '🐾 반려동물과',
        title: '생명을 돌보는 손길, 나의 커리어 차트',
        desc: '동물을 향한 진심 어린 공감과 과학적 지식을 연결하여, 보호자에게 신뢰를 주는 전문적인 보건사의 서사 완성.',
        cards: [
          '/reviews/univ-jaso/2nd_card_news/01.jpeg',
          '/reviews/univ-jaso/2nd_card_news/02.jpeg',
          '/reviews/univ-jaso/2nd_card_news/03.jpeg',
          '/reviews/univ-jaso/2nd_card_news/04.jpeg',
          '/reviews/univ-jaso/2nd_card_news/05.jpeg',
          '/reviews/univ-jaso/2nd_card_news/06.jpeg',
          '/reviews/univ-jaso/2nd_card_news/07.jpeg',
        ],
        blogUrl: 'https://blog.naver.com/careerbloom/224069764418',
        instaUrl: 'https://www.instagram.com/p/DQs3zYMAadR/?img_index=1',
      },
      {
        round: '📸 사진영상미디어과',
        title: '너의 스토리를 최종 편집하라',
        desc: '수많은 촬영 경험 중 직무에 필요한 핵심 장면을 선별하고, 감각적인 문장으로 큐레이션하여 나를 어필.',
        cards: [
          '/reviews/univ-jaso/3rd_card_news/01.jpeg',
          '/reviews/univ-jaso/3rd_card_news/02.jpeg',
          '/reviews/univ-jaso/3rd_card_news/03.jpeg',
          '/reviews/univ-jaso/3rd_card_news/04.jpeg',
          '/reviews/univ-jaso/3rd_card_news/05.jpeg',
        ],
        blogUrl: 'https://blog.naver.com/careerbloom/224044696392',
        instaUrl: 'https://www.instagram.com/p/DP2grqngQSU/?img_index=1',
      },
      {
        round: '🏨 호텔관광과',
        title: '체크인, 당신의 커리어: 최고의 경험을 설계하라',
        desc: '고객의 불편함을 편안함으로 바꾸는 위기관리 능력과 세심한 공감력을 바탕으로, 프리미엄 서비스 전문가임을 증명.',
        cards: [],
        blogUrl: 'https://blog.naver.com/careerbloom/224045693963',
        instaUrl: 'https://www.instagram.com/p/DQODelagT8v/?img_index=1',
      },
      {
        round: '🌲 환경조경학과',
        title: '나만의 정원을 설계하라: 경험으로 만드는 커리어 랜드스케이프',
        desc: '조경 설계 프로젝트에서 다져온 공간 이해도와 생명에 대한 철학을 입체적인 커리어 로드맵으로 그려내기.',
        cards: [],
        blogUrl: 'https://blog.naver.com/careerbloom/224077111745',
        instaUrl: 'https://www.instagram.com/p/DRI6glUAbFi/',
      },
    ],
  },
];

// 만족도 별점
const Stars = ({ score }) => (
  <div className="flex items-center gap-1.5">
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < Math.round(score) ? '#C4907A' : 'none'}
          stroke="#C4907A"
          strokeWidth="1.5"
        >
          <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.5l1.6-7L2 9.8l7.1-.6z" />
        </svg>
      ))}
    </div>
    <span className="text-sm font-medium text-terracotta">
      만족도 {score.toFixed(1)} / 5.0
    </span>
  </div>
);

// 이미지: public 경로를 참조하고, 파일이 아직 없으면 placeholder를 보여준다.
const SmartImage = ({ src, label, className = '', fit = 'object-cover' }) => {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-cream-dark/40 border border-dashed border-sage-light/40 text-warm-gray ${className}`}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        {label && <span className="text-[11px] tracking-wide">{label}</span>}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={label || ''}
      loading="lazy"
      onError={() => setError(true)}
      className={`${fit} ${className}`}
    />
  );
};

// 카드뉴스 가로 슬라이더 — 터치/트랙패드 스와이프 + 좌우 화살표 버튼.
// 카드뉴스 확대 모달 (라이트박스). ← → 키보드 이동, ESC/배경 클릭으로 닫기.
const Lightbox = ({ cards, index, onClose, onNavigate }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') onNavigate(-1);
      else if (e.key === 'ArrowRight') onNavigate(1);
    };
    window.addEventListener('keydown', onKey);
    // 모달 동안 배경 스크롤 잠금
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onNavigate]);

  const hasMultiple = cards.length > 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/85 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* 닫기 */}
      <button
        type="button"
        onClick={onClose}
        aria-label="닫기"
        className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20 transition-colors"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* 이전 */}
      {hasMultiple && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(-1);
          }}
          aria-label="이전 카드"
          className="absolute left-2 sm:left-6 w-11 h-11 flex items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20 transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}

      {/* 이미지 */}
      <motion.img
        key={index}
        src={cards[index]}
        alt={`카드 ${index + 1}`}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="max-h-[85vh] max-w-[92vw] sm:max-w-[80vw] object-contain rounded-xl shadow-2xl"
      />

      {/* 다음 */}
      {hasMultiple && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(1);
          }}
          aria-label="다음 카드"
          className="absolute right-2 sm:right-6 w-11 h-11 flex items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20 transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}

      {/* 카운터 */}
      {hasMultiple && (
        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cream/10 text-cream text-xs tracking-wider">
          {index + 1} / {cards.length}
        </span>
      )}
    </motion.div>
  );
};

const CardNewsSlider = ({ cards }) => {
  const scrollRef = useRef(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // 카드뉴스가 없는 회기는 슬라이더를 렌더링하지 않는다.
  if (!cards || cards.length === 0) {
    return null;
  }

  const scrollBy = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  const navigate = (dir) =>
    setLightboxIndex((i) => (i + dir + cards.length) % cards.length);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 -mx-1 px-1 scroll-smooth touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((src, i) => (
          <button
            type="button"
            key={i}
            onClick={() => setLightboxIndex(i)}
            aria-label={`카드 ${i + 1} 크게 보기`}
            className="snap-center shrink-0 w-52 sm:w-60 aspect-[4/5] rounded-xl overflow-hidden border border-sage-light/20 shadow-sm bg-cream-dark/20 cursor-zoom-in transition-transform duration-300 hover:scale-[1.02] hover:shadow-md"
          >
            <SmartImage
              src={src}
              label={`카드 ${i + 1}`}
              fit="object-contain"
              className="w-full h-full"
            />
          </button>
        ))}
      </div>

      {/* 좌우 버튼 (포인터 장치용 — 모바일은 스와이프) */}
      <button
        type="button"
        onClick={() => scrollBy(-1)}
        aria-label="이전 카드"
        className="hidden md:flex items-center justify-center absolute left-1 top-[calc(50%-0.5rem)] -translate-y-1/2 w-9 h-9 rounded-full bg-soft-white/90 backdrop-blur shadow-md text-sage-dark hover:bg-soft-white transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => scrollBy(1)}
        aria-label="다음 카드"
        className="hidden md:flex items-center justify-center absolute right-1 top-[calc(50%-0.5rem)] -translate-y-1/2 w-9 h-9 rounded-full bg-soft-white/90 backdrop-blur shadow-md text-sage-dark hover:bg-soft-white transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* 확대 모달 */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            cards={cards}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={navigate}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// 외부 링크 버튼 (블로그 / 인스타그램)
const LinkButton = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-soft-white border border-sage-light/30 text-sm text-charcoal hover:border-sage hover:text-sage-dark transition-colors"
  >
    {children}
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H8M17 7v9" />
    </svg>
  </a>
);

const Review = () => {
  const [openId, setOpenId] = useState(reviews[0]?.id ?? null);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 gradient-hero texture-grain overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-40 h-40 rounded-full bg-gradient-to-br from-sage-light/20 to-transparent blur-3xl" />
          <div className="absolute bottom-20 left-[5%] w-56 h-56 rounded-full bg-gradient-to-br from-coral-light/15 to-transparent blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage-dark text-xs font-medium tracking-wider uppercase rounded-full mb-6">
              Bloom Reviews
            </span>
            <h1 className="heading-display text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
              성장의 기록
            </h1>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              나다운 길을 찾아가는 여정 속에서, 커리어블룸의 워크숍과 1:1 코칭을 경험한 이들이
              <br className="hidden md:block" />{' '}
              직접 증명해 낸 생생한 변화의 이야기를 전합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-6">
          {reviews.map((review, index) => {
            const isOpen = openId === review.id;
            return (
              <motion.article
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-soft-white rounded-3xl border border-sage-light/20 shadow-[0_4px_30px_rgba(139,168,136,0.08)] overflow-hidden"
              >
                {/* Header (toggle) */}
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : review.id)}
                  className="w-full text-left p-6 md:p-8 flex items-start gap-4"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 bg-coral/10 text-coral-dark text-xs font-medium tracking-wider rounded-full">
                        {review.category}
                      </span>
                      {review.satisfaction != null && <Stars score={review.satisfaction} />}
                    </div>
                    {review.org && (
                      <p className="text-sm text-sage-dark font-medium mb-1">{review.org}</p>
                    )}
                    <h2 className="heading-display text-xl md:text-2xl text-charcoal leading-snug">
                      {review.title}
                    </h2>
                  </div>
                  <span
                    className={`flex-shrink-0 w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center text-sage-dark transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>

                {/* Body (expandable) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 md:pb-10">
                        {/* Intro */}
                        <p className="text-warm-gray leading-relaxed border-t border-sage-light/20 pt-6">
                          {review.intro}
                        </p>

                        {/* Meta (진행 방식 / 참여 학과 등) */}
                        {review.meta && review.meta.length > 0 && (
                          <dl className="mt-5 space-y-2.5 p-5 rounded-2xl bg-cream border border-sage-light/20">
                            {review.meta.map((m, i) => (
                              <div key={i} className="flex flex-col sm:flex-row sm:gap-3">
                                <dt className="flex-shrink-0 text-sm font-medium text-sage-dark sm:w-24">
                                  {m.label}
                                </dt>
                                <dd className="text-sm text-warm-gray leading-relaxed">{m.value}</dd>
                              </div>
                            ))}
                          </dl>
                        )}

                        {/* Participant Quote */}
                        {review.quote && (
                          <blockquote className="relative mt-6 p-6 rounded-2xl bg-gradient-to-br from-sage-light/10 via-cream to-coral-light/10 border border-sage-light/20">
                            <p className="text-xs font-medium text-sage-dark tracking-wider mb-2">
                              💬 참여자 한 줄 후기
                            </p>
                            <p className="font-serif text-lg text-charcoal leading-relaxed">
                              "{review.quote}"
                            </p>
                          </blockquote>
                        )}

                        {/* 2×3 Image Grid */}
                        <div className="mt-8">
                          <h3 className="text-sm font-medium uppercase tracking-wider text-sage-dark mb-4 flex items-center gap-2">
                            <span className="w-8 h-px bg-sage-light" />
                            현장 스케치 및 실습 기록
                          </h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                            {review.gallery.map((img, i) => (
                              <SmartImage
                                key={i}
                                src={img.src}
                                label={img.label}
                                className="w-full aspect-[4/3] rounded-xl"
                              />
                            ))}
                          </div>
                        </div>

                        {/* Sessions */}
                        <div className="mt-10">
                          <h3 className="text-sm font-medium uppercase tracking-wider text-sage-dark mb-5 flex items-center gap-2">
                            <span className="w-8 h-px bg-sage-light" />
                            {review.sessionsTitle}
                          </h3>
                          <div className="space-y-5">
                            {review.sessions.map((session, i) => (
                              <div
                                key={i}
                                className="p-5 md:p-6 bg-cream rounded-2xl border border-sage-light/20"
                              >
                                <div className="flex items-start gap-3 mb-2">
                                  <span className="flex-shrink-0 px-2.5 py-1 bg-sage/10 text-sage-dark text-xs font-medium rounded-full mt-0.5">
                                    {session.round}
                                  </span>
                                  <h4 className="font-medium text-charcoal leading-snug">
                                    {session.title}
                                  </h4>
                                </div>
                                <p className="text-sm text-warm-gray leading-relaxed mb-4">
                                  {session.desc}
                                </p>

                                {/* 카드뉴스 슬라이더 */}
                                <CardNewsSlider cards={session.cards} />

                                {/* 바로가기 링크 */}
                                <div className="flex flex-wrap gap-3 mt-4">
                                  <LinkButton href={session.blogUrl}>블로그 후기 읽기</LinkButton>
                                  <LinkButton href={session.instaUrl}>인스타그램 보기</LinkButton>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 gradient-section">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-display text-2xl md:text-3xl text-charcoal mb-6">
              우리 기관에도 이런 변화를
            </h2>
            <p className="text-warm-gray mb-8 max-w-lg mx-auto">
              대학·기관·기업 맞춤형 워크숍 출강을 문의해 주세요.
              <br className="hidden md:block" />{' '}
              목적에 맞춘 실전형 모듈로 제안해 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://forms.gle/rnMFeZuoejL2VxRf8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                상담 신청하기
              </a>
              <a
                href="https://open.kakao.com/o/sgQfJTkh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                워크숍 출강 문의하기
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Review;
