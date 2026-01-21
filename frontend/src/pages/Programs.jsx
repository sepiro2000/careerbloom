import { motion } from 'framer-motion';
import program1Image from '../assets/programs_1.png';
import program2Image from '../assets/programs_2.jpeg';
import program3Image from '../assets/programs_3.png';
import program4Image from '../assets/programs_4.png';

const Programs = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 gradient-hero texture-grain overflow-hidden">
        <div className="absolute top-20 right-[10%] w-40 h-40 rounded-full bg-gradient-to-br from-sage-light/20 to-transparent blur-3xl" />
        <div className="absolute bottom-20 left-[5%] w-56 h-56 rounded-full bg-gradient-to-br from-coral-light/15 to-transparent blur-3xl" />

        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage-dark text-xs font-medium tracking-wider uppercase rounded-full mb-6">
              Coaching Programs
            </span>
            <h1 className="heading-display text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
              맞춤형 코칭 프로그램
            </h1>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              당신의 상황과 목표에 맞는 프로그램을 선택하세요.
              <br className="hidden md:block" />
              커리어블룸이 가장 '나다운' 길을 함께 설계합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-32">

          {/* Program 01: 1:1 진로 코칭 */}
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-8 left-0 md:left-8 font-serif text-[120px] md:text-[180px] font-light text-sage-light/10 leading-none select-none pointer-events-none">
              01
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start relative">
              {/* Image */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-sage-light/20 to-sage/10 rounded-3xl transform rotate-2" />
                <div className="block relative rounded-2xl overflow-hidden shadow-xl shadow-sage/10">
                  <img
                    src={program1Image}
                    alt="1:1 진로 코칭"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-3 py-1 bg-sage/10 text-sage-dark text-xs font-medium tracking-wider uppercase rounded-full">
                    Program 01
                  </span>
                </div>

                <h2 className="heading-display text-2xl md:text-3xl text-charcoal mb-2">
                  1:1 진로 코칭
                </h2>
                <p className="text-sm text-warm-gray uppercase tracking-wider mb-4">
                  Career Coaching
                </p>

                <p className="text-charcoal text-lg mb-8">
                  막막한 진로, 나에게 맞는 방식으로 답을 찾습니다.
                </p>

                {/* Type A */}
                <div className="mb-6 p-6 bg-soft-white rounded-2xl border border-sage-light/20">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-sage/10 text-sage-dark text-xs font-medium rounded">Type A</span>
                    <span className="font-medium text-charcoal">[진단형] 커리어 GPS</span>
                  </div>
                  <p className="text-sage-dark text-sm font-medium mb-3">
                    "객관적인 데이터로 나를 증명하고 싶다면"
                  </p>
                  <p className="text-warm-gray text-sm leading-relaxed mb-4">
                    내 성향과 적성을 명확한 데이터로 확인하고 싶은 분들을 위한 과정입니다. 검증된 진단 도구(Holland/VIA)를 통해 나만의 강점 좌표를 찍고, 나아갈 방향을 설정합니다.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-sage-dark font-medium">추천 대상:</span> <span className="text-warm-gray">내가 무엇을 좋아하는지 모르는 분, 객관적인 자기 이해가 필요한 분</span></p>
                    <p><span className="text-sage-dark font-medium">사용 도구:</span> <span className="text-warm-gray">Holland 적성탐색검사 또는 VIA 강점 검사</span></p>
                    <p><span className="text-sage-dark font-medium">진행 흐름:</span> <span className="text-warm-gray">사전 진단 → 프로파일 심층 해석 → 경험 연결 → 진로 방향성 도출</span></p>
                  </div>
                </div>

                {/* Type B */}
                <div className="p-6 bg-soft-white rounded-2xl border border-sage-light/20">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-sage/10 text-sage-dark text-xs font-medium rounded">Type B</span>
                    <span className="font-medium text-charcoal">[대화형] 커리어 딥다이브</span>
                  </div>
                  <p className="text-sage-dark text-sm font-medium mb-3">
                    "내 이야기를 통해 생각을 정리하고 싶다면"
                  </p>
                  <p className="text-warm-gray text-sm leading-relaxed mb-4">
                    검사 결과지보다 나의 상황과 맥락에 집중하는 과정입니다. 꼬리에 꼬리를 무는 심층 질문을 통해, 얽혀있던 고민의 실타래를 풀고 현실적인 해결책을 찾습니다.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-sage-dark font-medium">추천 대상:</span> <span className="text-warm-gray">전공/직무 적합성이 고민인 분, 이직/퇴사를 앞둔 분, 현실적 조언이 필요한 분</span></p>
                    <p><span className="text-sage-dark font-medium">사용 도구:</span> <span className="text-warm-gray">사전 질문지, 커리어 히스토리텔링, 가치관 질문</span></p>
                    <p><span className="text-sage-dark font-medium">진행 흐름:</span> <span className="text-warm-gray">핵심 고민 탐색 → 과거-현재 연결 → 방해물 제거 → Action Plan 수립</span></p>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Program 02: 진로긍정학 4주 과정 */}
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-8 left-0 md:left-8 font-serif text-[120px] md:text-[180px] font-light text-coral-light/10 leading-none select-none pointer-events-none">
              02
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start relative">
              {/* Content - Left */}
              <div className="relative lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-3 py-1 bg-coral/10 text-coral-dark text-xs font-medium tracking-wider uppercase rounded-full">
                    Program 02
                  </span>
                </div>

                <h2 className="heading-display text-2xl md:text-3xl text-charcoal mb-2">
                  진로긍정학
                </h2>
                <p className="text-sm text-warm-gray uppercase tracking-wider mb-4">
                  Signature Program
                </p>

                <p className="text-charcoal text-lg mb-4">
                  유리멘탈 극복부터 커리어 로드맵까지, 4주간의 마스터 코스
                </p>
                <p className="text-warm-gray leading-relaxed mb-8">
                  자존감 회복, 회복탄력성, 가치관 수립, 비전 설계를 한 번에! 흔들리지 않는 '단단한 나'를 만드는 커리어블룸의 시그니처 프로그램입니다.
                </p>

                {/* 4 Weeks */}
                <div className="space-y-4">
                  {[
                    { week: '1주', title: '강점 (Strength)', desc: '내 안의 강점 엔진 발견하기 (검사 해석)' },
                    { week: '2주', title: '회복 (Resilience)', desc: '실패를 데이터로 바꾸는 관점 디자인' },
                    { week: '3주', title: '결정 (Decision)', desc: "'최대자의 함정'에서 벗어나 나만의 기준 세우기" },
                    { week: '4주', title: '비전 (Vision)', desc: "대체 불가능한 '커리어 시그니처' 완성" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-soft-white rounded-xl border border-coral-light/20"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-coral-light/10 flex items-center justify-center">
                        <span className="text-xs font-medium text-coral-dark">{item.week}</span>
                      </div>
                      <div>
                        <p className="font-medium text-charcoal mb-1">{item.title}</p>
                        <p className="text-sm text-warm-gray">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Image - Right */}
              <div className="lg:order-2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-coral-light/20 to-coral/10 rounded-3xl transform -rotate-2" />
                  <div className="block relative rounded-2xl overflow-hidden shadow-xl shadow-coral/10">
                    <img
                      src={program2Image}
                      alt="진로긍정학 4주 과정"
                      className="w-full h-full object-cover aspect-[4/3]"
                    />
                  </div>
                </div>
                {/* CTA Button */}
                <div className="flex justify-center mt-10">
                  <a
                    href="https://blog.naver.com/careerbloom/224149348137"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-coral hover:bg-coral-dark text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-coral/30"
                  >
                    4주 커리큘럼 자세히 보기
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Program 03: 라이프 디자인 */}
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-8 left-0 md:left-8 font-serif text-[120px] md:text-[180px] font-light text-sage-light/10 leading-none select-none pointer-events-none">
              03
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start relative">
              {/* Image */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-sage-light/20 to-sage/10 rounded-3xl transform rotate-2" />
                <div className="block relative rounded-2xl overflow-hidden shadow-xl shadow-sage/10">
                  <img
                    src={program3Image}
                    alt="라이프 디자인"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-3 py-1 bg-sage/10 text-sage-dark text-xs font-medium tracking-wider uppercase rounded-full">
                    Program 03
                  </span>
                </div>

                <h2 className="heading-display text-2xl md:text-3xl text-charcoal mb-2">
                  라이프 디자인
                </h2>
                <p className="text-sm text-warm-gray uppercase tracking-wider mb-4">
                  Life Design
                </p>

                <p className="text-charcoal text-lg mb-8">
                  일과 삶, 관계 속에서 잃어버린 '나다움'을 회복합니다.
                </p>

                {/* Theme 1 */}
                <div className="mb-4 p-5 bg-soft-white rounded-xl border border-sage-light/20">
                  <div className="mb-2">
                    <span className="inline-block px-2 py-0.5 bg-sage/10 text-sage-dark text-xs font-medium rounded mr-2">Theme 1</span>
                    <span className="font-medium text-charcoal text-sm">[흥미] 잃어버린 나의 즐거움을 찾아서</span>
                  </div>
                  <p className="text-warm-gray text-sm leading-relaxed">
                    무기력한 일상에 활력이 필요하신가요? 내가 언제 눈이 반짝이는지, 무엇을 할 때 에너지가 차오르는지 탐색하여 일상의 '재미'를 회복합니다.
                  </p>
                </div>

                {/* Theme 2 */}
                <div className="mb-4 p-5 bg-soft-white rounded-xl border border-sage-light/20">
                  <div className="mb-2">
                    <span className="inline-block px-2 py-0.5 bg-sage/10 text-sage-dark text-xs font-medium rounded mr-2">Theme 2</span>
                    <span className="font-medium text-charcoal text-sm">[강점] 나를 단단하게 만드는 강점 활용법</span>
                  </div>
                  <p className="text-warm-gray text-sm leading-relaxed">
                    남들과 비교하느라 지치셨나요? 약점을 보완하느라 애쓰기보다, 내가 가진 고유한 강점에 집중하여 자존감을 높이고 관계를 개선하는 법을 코칭합니다.
                  </p>
                </div>

                {/* Theme 3 */}
                <div className="p-5 bg-soft-white rounded-xl border border-sage-light/20">
                  <div className="mb-2">
                    <span className="inline-block px-2 py-0.5 bg-sage/10 text-sage-dark text-xs font-medium rounded mr-2">Theme 3</span>
                    <span className="font-medium text-charcoal text-sm">[가치관] 내 삶에 만족을 더하는 가치관의 발견</span>
                  </div>
                  <p className="text-warm-gray text-sm leading-relaxed">
                    남들이 좋다는 길을 가고도 공허한가요? 내가 인생에서 진짜 중요하게 여기는 가치가 무엇인지 정의하고, 후회 없는 선택을 하기 위한 나만의 기준을 세웁니다.
                  </p>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Program 04: 실전 취업 솔루션 */}
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-8 left-0 md:left-8 font-serif text-[120px] md:text-[180px] font-light text-terracotta/10 leading-none select-none pointer-events-none">
              04
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start relative">
              {/* Content - Left */}
              <div className="relative lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-3 py-1 bg-terracotta/10 text-terracotta text-xs font-medium tracking-wider uppercase rounded-full">
                    Program 04
                  </span>
                </div>

                <h2 className="heading-display text-2xl md:text-3xl text-charcoal mb-2">
                  실전 취업 솔루션
                </h2>
                <p className="text-sm text-warm-gray uppercase tracking-wider mb-4">
                  Job Solution
                </p>

                <p className="text-charcoal text-lg mb-2">
                  준비된 방향 위에 합격의 기술을 더합니다.
                </p>
                <p className="text-sm text-terracotta mb-8">
                  ※ 진로 방향성이 명확한 분들에 한해 진행됩니다.
                </p>

                {/* Option 1 */}
                <div className="mb-4 p-6 bg-soft-white rounded-2xl border border-terracotta/20">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-terracotta/10 text-terracotta text-xs font-medium rounded">Option 1</span>
                    <span className="font-medium text-charcoal">서류 합격 코칭</span>
                  </div>
                  <p className="text-warm-gray text-sm leading-relaxed">
                    경험 분해를 통해 투박한 경험을 매력적인 에피소드로 바꿉니다. 직무 역량과 나의 강점을 연결하여 '읽고 싶은 자소서'를 완성합니다.
                  </p>
                </div>

                {/* Option 2 */}
                <div className="p-6 bg-soft-white rounded-2xl border border-terracotta/20">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-terracotta/10 text-terracotta text-xs font-medium rounded">Option 2</span>
                    <span className="font-medium text-charcoal">면접/답변 코칭</span>
                  </div>
                  <p className="text-warm-gray text-sm leading-relaxed">
                    모의 면접을 통해 답변의 구조를 잡고, 비언어적 태도(시선, 표정, 보이스)까지 교정하여 면접관을 설득하는 이미지를 만듭니다.
                  </p>
                </div>
              </div>

              {/* Image - Right */}
              <div className="relative lg:order-2">
                <div className="absolute -inset-4 bg-gradient-to-br from-terracotta/20 to-terracotta/10 rounded-3xl transform -rotate-2" />
                <div className="block relative rounded-2xl overflow-hidden shadow-xl shadow-terracotta/10">
                  <img
                    src={program4Image}
                    alt="실전 취업 솔루션"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
              </div>
            </div>
          </motion.article>

        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 gradient-section">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage-dark text-xs font-medium tracking-wider uppercase rounded-full mb-6">
              How It Works
            </span>
            <h2 className="heading-display text-3xl md:text-4xl text-charcoal">
              코칭 진행 과정
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-sage-light via-coral-light to-terracotta" />

            {[
              { step: '01', title: '상담 신청', desc: '신청서 작성 및 일정 조율' },
              { step: '02', title: '사전 진단', desc: '유형별 맞춤 진단 도구 제공' },
              { step: '03', title: '코칭 진행', desc: '맞춤형 1:1 코칭 세션' },
              { step: '04', title: '성장 확인', desc: '변화 점검 및 피드백' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative text-center"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-soft-white shadow-lg flex items-center justify-center relative z-10">
                  <span className="font-serif text-2xl text-sage-dark">{item.step}</span>
                </div>
                <h3 className="font-medium text-lg text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-warm-gray">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-charcoal text-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sage via-coral-light to-terracotta" />
        <div className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-sage/5 blur-3xl" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-display text-2xl md:text-3xl lg:text-4xl mb-6">
              어떤 프로그램이
              <br />
              나에게 맞을까요?
            </h2>
            <p className="text-cream/70 mb-8 max-w-lg mx-auto">
              첫 상담을 통해 현재 상황과 목표를 파악하고,
              당신에게 가장 적합한 프로그램을 안내해 드립니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://forms.gle/rnMFeZuoejL2VxRf8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sage hover:bg-sage-dark text-cream font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-sage/30"
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
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-cream/10 text-cream font-medium rounded-full border-2 border-cream/30 hover:border-cream/50 transition-all duration-300"
              >
                카카오톡으로 문의하기
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
