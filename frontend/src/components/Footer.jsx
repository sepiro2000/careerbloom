import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logoImage from '../assets/careerbloom_logo.png';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Kakao Talk',
      url: 'https://open.kakao.com/o/sgQfJTkh',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C6.5 3 2 6.58 2 11c0 2.84 1.87 5.33 4.67 6.77l-.74 2.77c-.07.26.23.48.47.34l3.3-2.15c.68.09 1.38.14 2.1.14 5.5 0 10-3.58 10-8s-4.5-8-10-8zm-3.5 9.5c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1zm3.5-1c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2zm3.5 1c-.39 0-.72-.23-.88-.57l-1.25-2.5c-.24-.48-.05-1.06.43-1.3.48-.24 1.06-.05 1.3.43l.4.8.4-.8c.24-.48.82-.67 1.3-.43.48.24.67.82.43 1.3l-1.25 2.5c-.16.34-.49.57-.88.57z"/>
        </svg>
      ),
    },
    {
      name: 'Blog',
      url: 'https://blog.naver.com/careerbloom',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/careerbloom_coach',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative">
      {/* Banner Section */}
      <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-r from-cream-dark via-sage-light/20 to-coral-light/30">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-[10%] w-32 h-32 rounded-full bg-sage-light/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-[15%] w-40 h-40 rounded-full bg-coral-light/25 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-soft-white/30 blur-3xl" />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-charcoal tracking-tight mb-3">
              결국 답은 나입니다
            </p>
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-sage/40" />
              <p className="text-sm text-warm-gray tracking-widest uppercase">
                Career Bloom
              </p>
              <span className="w-8 h-px bg-coral/40" />
            </div>
          </motion.div>
        </div>

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-charcoal/20 to-transparent" />
      </div>

      {/* Main Footer Content */}
      <div className="bg-charcoal text-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={logoImage}
                  alt="커리어블룸 로고"
                  className="h-12 w-auto brightness-0 invert opacity-90"
                />
              </div>
              <p className="text-cream/70 text-sm leading-relaxed mb-6">
                흩어진 당신의 가능성을 모아,<br />
                가장 '나다운' 길을 설계합니다.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="text-sm font-medium uppercase tracking-wider text-cream/50 mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-cream/70 hover:text-cream transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-cream/70 hover:text-cream transition-colors text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/programs" className="text-cream/70 hover:text-cream transition-colors text-sm">
                    Programs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="md:col-span-1">
              <h4 className="text-sm font-medium uppercase tracking-wider text-cream/50 mb-6">
                Contact
              </h4>

              {/* Social Links */}
              <div className="flex gap-4 mb-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center text-cream/70 hover:bg-sage/30 hover:text-cream transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              {/* Email */}
              <div className="mb-4">
                <p className="text-xs text-cream/50 uppercase tracking-wider mb-1">Email</p>
                <a
                  href="mailto:kar4823@nate.com"
                  className="text-cream/70 hover:text-cream transition-colors text-sm"
                >
                  kar4823@nate.com
                </a>
              </div>

              {/* Application Button */}
              <motion.a
                href="https://forms.gle/careerbloom"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-sage/80 hover:bg-sage text-cream text-sm font-medium rounded-full transition-colors mt-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14,2 14,8 20,8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10,9 9,9 8,9" />
                </svg>
                상담 신청서 작성하기
              </motion.a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-cream/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-cream/40 text-xs">
                © 2026 Career Bloom. All rights reserved.
              </p>
              <p className="text-cream/30 text-xs">
                진로 · 라이프 · 커리어 코칭
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
