import { motion } from 'framer-motion';
import aboutMeImage from '../assets/about_me.jpeg';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.7 }
  };

  const skills = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: '전문 진단 도구 활용 및 심층 해석',
      desc: 'VIA 강점, Holland 등 표준화 검사 활용',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      title: '1:1 맞춤형 커리어/심리 코칭',
      desc: '개인별 상황에 최적화된 코칭 설계',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: '나다움을 찾는 라이프 디자인',
      desc: '일과 삶의 균형을 위한 통합적 접근',
    },
  ];

  const stats = [
    { value: '600+', label: '누적 강의 및 워크숍' },
    { value: '740+', label: '1:1 진로/취업 컨설팅' },
    { value: '10+', label: '년 경력' },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 gradient-hero texture-grain overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-[10%] w-40 h-40 rounded-full bg-gradient-to-br from-sage-light/20 to-transparent blur-3xl" />
        <div className="absolute bottom-20 left-[5%] w-56 h-56 rounded-full bg-gradient-to-br from-coral-light/15 to-transparent blur-3xl" />

        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage-dark text-xs font-medium tracking-wider uppercase rounded-full mb-6">
              About Coach
            </span>
            <h1 className="heading-display text-3xl md:text-4xl lg:text-5xl text-charcoal">
              당신의 성장 파트너
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Profile Image - Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="relative max-w-sm mx-auto lg:max-w-none">
                {/* Background decoration */}
                <div className="absolute -inset-4 bg-gradient-to-br from-sage-light/30 to-coral-light/20 rounded-3xl transform rotate-2" />

                {/* Image container */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-sage/10">
                  <img
                    src={aboutMeImage}
                    alt="김아름 코치 프로필"
                    className="w-full h-full object-cover aspect-[3/4]"
                  />
                </div>
              </div>
            </motion.div>

            {/* Profile Info - Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="mb-8">
                <h2 className="heading-display text-3xl md:text-4xl text-charcoal mb-2">
                  김아름
                </h2>
                <p className="text-warm-gray text-lg">
                  커리어블룸 대표 / 진로·라이프 코치
                </p>
              </div>

              {/* Education */}
              <div className="mb-8">
                <h3 className="text-sm font-medium uppercase tracking-wider text-sage-dark mb-4 flex items-center gap-2">
                  <span className="w-8 h-px bg-sage-light" />
                  학력
                </h3>
                <p className="text-charcoal">
                  고려대학교 일반대학원 교육학과 상담 전공 <span className="text-warm-gray">석사</span>
                </p>
              </div>

              {/* Career */}
              <div className="mb-8">
                <h3 className="text-sm font-medium uppercase tracking-wider text-sage-dark mb-4 flex items-center gap-2">
                  <span className="w-8 h-px bg-sage-light" />
                  주요 경력
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="inline-block px-2 py-0.5 bg-sage/10 text-sage-dark text-xs font-medium rounded mt-0.5">
                      現
                    </span>
                    <p className="text-charcoal">한국가이던스 표준화 검사 해석 강사</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-block px-2 py-0.5 bg-sage/10 text-sage-dark text-xs font-medium rounded mt-0.5">
                      現
                    </span>
                    <p className="text-charcoal">신구대학교 비교과 진로/취업 특강 강사</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-block px-2 py-0.5 bg-warm-gray/10 text-warm-gray text-xs font-medium rounded mt-0.5">
                      前
                    </span>
                    <p className="text-warm-gray">건국대학교 진로취업센터 취업지원관</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-block px-2 py-0.5 bg-warm-gray/10 text-warm-gray text-xs font-medium rounded mt-0.5">
                      前
                    </span>
                    <p className="text-warm-gray">신구대학교 취업 교과목 강사 및 컨설턴트</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-block px-2 py-0.5 bg-warm-gray/10 text-warm-gray text-xs font-medium rounded mt-0.5">
                      前
                    </span>
                    <p className="text-warm-gray">동양미래대학교 교양과(진로 설계, 리더십) 강사</p>
                  </div>
                </div>
              </div>

              {/* Qualifications */}
              <div className="mb-8">
                <h3 className="text-sm font-medium uppercase tracking-wider text-sage-dark mb-4 flex items-center gap-2">
                  <span className="w-8 h-px bg-sage-light" />
                  자격 사항
                </h3>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-soft-white rounded-full border border-sage-light/30 text-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sage">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    상담심리사 2급
                    <span className="text-xs text-warm-gray">(한국상담심리학회)</span>
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-soft-white rounded-full border border-sage-light/30 text-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sage">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    직업상담사 2급
                    <span className="text-xs text-warm-gray">(한국산업인력공단)</span>
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-sage-light/10 via-cream-dark/50 to-coral-light/10 rounded-2xl">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="font-serif text-2xl md:text-3xl font-medium text-sage-dark mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs md:text-sm text-warm-gray">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 md:py-28 gradient-section">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-coral/10 text-coral-dark text-xs font-medium tracking-wider uppercase rounded-full mb-6">
              Core Competencies
            </span>
            <h2 className="heading-display text-3xl md:text-4xl text-charcoal">
              핵심 역량
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="h-full bg-soft-white rounded-2xl p-8 card-hover border border-sage-light/10 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sage-light/30 to-sage/10 flex items-center justify-center text-sage-dark group-hover:scale-110 transition-transform duration-500">
                    {skill.icon}
                  </div>
                  <h3 className="font-medium text-lg text-charcoal mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-warm-gray leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Quote Section */}
      <section className="py-20 md:py-28 bg-charcoal text-cream relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sage via-coral-light to-sage" />
        <div className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-sage/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-[5%] w-48 h-48 rounded-full bg-coral/5 blur-3xl" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-6xl text-sage-light/30 font-serif mb-6">"</div>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-8">
              단단한 뿌리가 있어야
              <br />
              건강한 열매를 맺습니다.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-sage-light/30" />
              <p className="text-cream/60 text-sm tracking-wider">
                커리어블룸 코칭 철학
              </p>
              <span className="w-12 h-px bg-sage-light/30" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-display text-2xl md:text-3xl text-charcoal mb-6">
              함께 성장의 여정을 시작하세요
            </h2>
            <p className="text-warm-gray mb-8 max-w-lg mx-auto">
              첫 상담을 통해 현재 고민을 나누고,
              당신에게 맞는 코칭 방향을 찾아드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://forms.gle/rnMFeZuoejL2VxRf8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14,2 14,8 20,8" />
                </svg>
                상담 신청하기
              </a>
              <a
                href="https://open.kakao.com/o/sgQfJTkh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                카카오톡 문의하기
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
