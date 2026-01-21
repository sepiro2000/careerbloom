import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import homeMainImage from '../assets/home_main.png';
import mainTreeImage from '../assets/main_tree.png';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center gradient-hero texture-grain">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating organic shapes */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-sage-light/20 to-transparent blur-2xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-40 left-[5%] w-48 h-48 rounded-full bg-gradient-to-br from-coral-light/15 to-transparent blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 left-[15%] w-24 h-24 blob-shape bg-gradient-to-br from-sage/10 to-coral-light/10 blur-xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-28 pb-16">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="order-2 lg:order-1 text-center lg:text-left"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage-dark text-xs font-medium tracking-wider uppercase rounded-full">
                  Career & Life Coaching
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="heading-display text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6"
              >
                <span className="block">흩어진 당신의 가능성을 모아,</span>
                <span className="block mt-2">
                  가장
                  <span className="relative mx-1 md:mx-2">
                    '나다운'
                    <svg
                      className="absolute -bottom-1 left-0 w-full"
                      viewBox="0 0 100 8"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 6 Q 25 0, 50 6 T 100 6"
                        stroke="url(#underline-gradient)"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8BA888" />
                          <stop offset="100%" stopColor="#E8A598" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  길을 설계합니다.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="heading-sub text-warm-gray text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-8"
              >
                꽃이 피어나듯, 당신의 능력과 꿈이 활짝 피어나도록
                <br className="hidden md:block" />{' '}
                '커리어블룸'이 함께 합니다.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center lg:items-start"
              >
                <Link to="/programs" className="btn-primary">
                  프로그램 보기
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link to="/about" className="btn-secondary">
                  코치 소개
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
                {/* Background decoration */}
                <div className="absolute inset-4 bg-gradient-to-br from-sage-light/30 via-coral-light/20 to-cream rounded-[2rem] transform rotate-3" />
                <div className="absolute inset-4 bg-gradient-to-tl from-sage-light/20 via-transparent to-coral-light/30 rounded-[2rem] transform -rotate-2" />

                {/* Image container */}
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-sage/10">
                  <img
                    src={homeMainImage}
                    alt="커리어블룸 메인 일러스트"
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator - hidden on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-warm-gray"
          >
            <span className="text-xs tracking-wider">SCROLL</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="1" y="1" width="14" height="22" rx="7" />
              <circle
                cx="8"
                cy="8"
                r="2"
                fill="currentColor"
                className="animate-[scrollBounce_2s_ease-in-out_infinite]"
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-24 md:py-32 gradient-section">
        {/* Decorative gradient overlay */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cream/50 to-transparent" />

        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage-dark text-xs font-medium tracking-wider uppercase rounded-full mb-6">
              About Philosophy
            </span>
            <h2 className="heading-display text-3xl md:text-4xl text-charcoal">
              Career & Life Coaching
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Tree Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative max-w-md mx-auto">
                <img
                  src={mainTreeImage}
                  alt="커리어블룸 나무 일러스트"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <blockquote className="relative">
                <div className="absolute -top-4 -left-4 text-6xl text-sage-light/30 font-serif">"</div>
                <p className="font-serif text-xl md:text-2xl text-charcoal leading-relaxed mb-6 pl-4">
                  단단한 뿌리가 있어야
                  <br />
                  건강한 열매를 맺습니다.
                </p>
              </blockquote>

              <div className="space-y-4 text-warm-gray leading-relaxed">
                <p>
                  나무가 깊게 뿌리내려야 비바람에도 흔들리지 않듯,
                  커리어블룸은 당장의 결과보다 앞으로의 삶을 지탱해 줄
                  <span className="text-terracotta font-medium"> '마음의 뿌리'</span>를 먼저 세웁니다.
                </p>

                <div className="pl-4 border-l-2 border-sage-light/50 space-y-3 my-6">
                  <p>
                    <span className="text-sage-dark font-medium">[진로]</span>{' '}
                    내 안의 긍정 자원을 발견하는
                  </p>
                  <p>
                    <span className="text-sage-dark font-medium">[라이프]</span>{' '}
                    일과 삶의 균형을 찾는
                  </p>
                  <p>
                    <span className="text-sage-dark font-medium">[커리어 성취]</span>{' '}
                    그 위에서 자연스럽게 피어나는
                  </p>
                </div>

                <p className="font-medium text-charcoal">
                  단단한 '나'를 세우는 여정을 함께합니다.
                </p>
              </div>

              <div className="mt-8">
                <Link to="/about" className="btn-secondary">
                  코치에 대해 더 알아보기
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Preview Section */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-coral/10 text-coral-dark text-xs font-medium tracking-wider uppercase rounded-full mb-6">
              Our Programs
            </span>
            <h2 className="heading-display text-3xl md:text-4xl text-charcoal mb-4">
              맞춤형 코칭 프로그램
            </h2>
            <p className="text-warm-gray max-w-xl mx-auto">
              당신의 상황과 목표에 맞는 프로그램을 선택하세요
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: '1:1 진로 코칭',
                subtitle: 'Career Coaching',
                desc: '막막한 진로, 나에게 맞는 방식으로 답을 찾습니다',
                color: 'sage',
              },
              {
                num: '02',
                title: '진로긍정학',
                subtitle: 'Signature Program',
                desc: '유리멘탈 극복부터 커리어 로드맵까지, 4주 마스터 코스',
                color: 'coral',
              },
              {
                num: '03',
                title: '라이프 디자인',
                subtitle: 'Life Design',
                desc: '일과 삶, 관계 속에서 잃어버린 \'나다움\'을 회복합니다',
                color: 'sage',
              },
              {
                num: '04',
                title: '실전 취업 솔루션',
                subtitle: 'Job Solution',
                desc: '준비된 방향 위에 합격의 기술을 더합니다',
                color: 'terracotta',
              },
            ].map((program, index) => (
              <motion.div
                key={program.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Link
                  to="/programs"
                  className={`block h-full bg-soft-white rounded-2xl p-8 card-hover border border-${program.color}-light/20`}
                >
                  <span className={`text-4xl font-serif font-light text-${program.color}-light`}>
                    {program.num}
                  </span>
                  <h3 className="heading-display text-xl text-charcoal mt-4 mb-1">
                    {program.title}
                  </h3>
                  <p className="text-xs text-warm-gray uppercase tracking-wider mb-4">
                    {program.subtitle}
                  </p>
                  <p className="text-sm text-warm-gray leading-relaxed">
                    {program.desc}
                  </p>
                  <div className={`mt-6 flex items-center gap-2 text-sm text-${program.color}-dark font-medium`}>
                    자세히 보기
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-sage-light/10 via-cream to-coral-light/10" />

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage-dark text-xs font-medium tracking-wider uppercase rounded-full mb-6">
                Get in Touch
              </span>
              <h2 className="heading-display text-3xl md:text-4xl text-charcoal mb-6">
                지금, 당신의 이야기를
                <br />
                들려주세요
              </h2>
              <p className="text-warm-gray leading-relaxed mb-8">
                커리어블룸과 함께 가장 '나다운' 길을 찾아가는 여정을 시작하세요.
                첫 상담을 통해 현재 고민과 목표를 나누고, 맞춤형 코칭 방향을 안내해 드립니다.
              </p>

              <a
                href="https://forms.gle/rnMFeZuoejL2VxRf8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14,2 14,8 20,8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                상담 신청서 작성하기
              </a>
            </motion.div>

            {/* Right: Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              {/* Kakao Talk */}
              <a
                href="https://open.kakao.com/o/sgQfJTkh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-soft-white rounded-xl p-5 card-hover border border-sage-light/10"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FEE500] flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#3C1E1E">
                    <path d="M12 3C6.5 3 2 6.58 2 11c0 2.84 1.87 5.33 4.67 6.77l-.74 2.77c-.07.26.23.48.47.34l3.3-2.15c.68.09 1.38.14 2.1.14 5.5 0 10-3.58 10-8s-4.5-8-10-8z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-charcoal">Kakao Talk</p>
                  <p className="text-sm text-warm-gray truncate">오픈채팅으로 문의하기</p>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-warm-gray flex-shrink-0">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>

              {/* Blog */}
              <a
                href="https://blog.naver.com/careerbloom"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-soft-white rounded-xl p-5 card-hover border border-sage-light/10"
              >
                <div className="w-12 h-12 rounded-xl bg-[#03C75A] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-charcoal">Naver Blog</p>
                  <p className="text-sm text-warm-gray truncate">blog.naver.com/careerbloom</p>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-warm-gray flex-shrink-0">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/careerbloom_coach"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-soft-white rounded-xl p-5 card-hover border border-sage-light/10"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-charcoal">Instagram</p>
                  <p className="text-sm text-warm-gray truncate">@careerbloom_coach</p>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-warm-gray flex-shrink-0">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
