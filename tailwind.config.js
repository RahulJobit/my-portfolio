/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
        body: ['Instrument Sans', 'sans-serif'],
      },
      colors: {
        bg: {
          dark: '#09090f',
          card: '#0f0f1a',
          border: '#1e1e32',
        },
        violet: {
          DEFAULT: '#7c5cfc',
          light: '#a78bfa',
          glow: '#7c5cfc33',
        },
        amber: {
          accent: '#f59e0b',
          glow: '#f59e0b22',
        },
        text: {
          primary: '#f0eeff',
          muted: '#8b8aa8',
          faint: '#3d3d5c',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'blink': 'blink 1.2s step-end infinite',
        'slide-right': 'slideRight 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px #7c5cfc44' },
          '50%': { boxShadow: '0 0 40px #7c5cfc88, 0 0 80px #7c5cfc22' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        slideRight: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}
