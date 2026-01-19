/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        'cream-dark': '#F5F0E8',
        sage: '#8BA888',
        'sage-light': '#A8C4A5',
        'sage-dark': '#6B8B68',
        coral: '#E8A598',
        'coral-light': '#F2C4BA',
        'coral-dark': '#D4877A',
        terracotta: '#C4907A',
        'warm-gray': '#8A8378',
        charcoal: '#3D3D3D',
        'soft-white': '#FDFCFA',
      },
      fontFamily: {
        serif: ['Gowun Batang', 'Georgia', 'serif'],
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
