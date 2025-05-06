/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#eef5ff',
          100: '#d9e7ff',
          200: '#bcd5ff',
          300: '#8dbaff',
          400: '#5793ff',
          500: '#3673ff',
          600: '#1657f9',
          700: '#0e45e6',
          800: '#1339ba',
          900: '#173893',
          950: '#122359',
        },
        'secondary': {
          50: '#fff9eb',
          100: '#ffefc7',
          200: '#ffdb89',
          300: '#ffc04b',
          400: '#ffa51e',
          500: '#ff8a05',
          600: '#e86b00',
          700: '#bf4d02',
          800: '#9b3c09',
          900: '#7e330b',
          950: '#451a02',
        },
        'accent': {
          50: '#fff5ed',
          100: '#ffe8d5',
          200: '#ffceab',
          300: '#ffae74',
          400: '#fd843e',
          500: '#fc5b12',
          600: '#ec4509',
          700: '#c33109',
          800: '#9c280e',
          900: '#7e240e',
          950: '#440f05',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 