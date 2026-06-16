/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryBg: '#121212',
        secondaryBg: '#18181b',
        cardBg: 'rgba(28, 28, 31, 0.6)',
        borderColor: 'rgba(255,255,255,0.1)',
        textPrimary: '#f4f4f5',
        textSecondary: '#a1a1aa',
        textMuted: '#71717a',
        accentYellow: '#facc15',
        accentPurple: '#c084fc',
        success: '#4ade80',
        danger: '#f87171',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'slide-in': 'slideIn 0.6s ease forwards',
        'fade-up': 'fadeUp 0.7s ease forwards',
      },
      keyframes: {
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
