/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#fdf0ff',
          100: '#f9d6ff',
          200: '#f0adff',
          300: '#e07af5',
          400: '#c84dd4',
          500: '#a62db0',
          600: '#74007A',
          700: '#5c0062',
          800: '#44004a',
          900: '#2c0030',
        },
        dark: {
          bg:      '#0a0a0f',
          surface: '#111118',
          card:    '#16161f',
          border:  'rgba(255,255,255,0.08)',
        },
        light: {
          bg:      '#f8f7ff',
          surface: '#ffffff',
          card:    '#f1effe',
          border:  'rgba(124,58,237,0.15)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slideUp: {
          '0%':   { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      backgroundImage: {
        'gradient-brand':    'none',
        'gradient-dark':     'linear-gradient(180deg, #0a0a0f 0%, #12101f 100%)',
        'gradient-radial':   'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
