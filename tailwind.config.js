/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e6f1fe',
          100: '#cce3fd',
          200: '#99c7fb',
          300: '#66abf9',
          400: '#338ff7',
          500: '#0073f5',
          600: '#005cc4',
          700: '#004593',
          800: '#002e62',
          900: '#001731',
        },
        secondary: {
          50: '#e6fcfa',
          100: '#ccf9f6',
          200: '#99f3ed',
          300: '#66ede4',
          400: '#33e7db',
          500: '#00e1d2',
          600: '#00b4a8',
          700: '#00877e',
          800: '#005a54',
          900: '#002d2a',
        },
        accent: {
          50: '#fff0e6',
          100: '#ffe2cc',
          200: '#ffc599',
          300: '#ffa866',
          400: '#ff8b33',
          500: '#ff6e00',
          600: '#cc5800',
          700: '#994200',
          800: '#662c00',
          900: '#331600',
        },
        dark: {
          100: '#d5d5d5',
          200: '#aaaaaa',
          300: '#808080',
          400: '#555555',
          500: '#2b2b2b',
          600: '#222222',
          700: '#1a1a1a',
          800: '#111111',
          900: '#080808',
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};