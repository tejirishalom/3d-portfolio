/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
      },
      colors: {
        black: {
          // Deep blue replaces pure black so dark surfaces retain the brand's cool tone.
          DEFAULT: '#071A33',
          100: '#061226',
          200: '#0A2342',
          300: '#10345A',
          500: '#1B4F82',
          600: '#0C1E36',
        },
        white: {
          DEFAULT: '#F7FBFF',
          800: '#E3F1FF',
          700: '#C6E2FA',
          600: '#9DC4E5',
          500: '#6F91B1',
        },
        blue: {
          DEFAULT: '#040c10f3',
          100: '#0F5E9E',
          200: '#125F9F',
          300: '#1677C8',
          400: '#2C91DB',
          500: '#075A9C',
        },
        sky: {
          DEFAULT: '#47B8F5',
          100: '#DDF4FF',
          200: '#B4E4FC',
          300: '#78CAF6',
          400: '#47B8F5',
        },
        beige: {
          DEFAULT: '#F2E5D0',
          100: '#FCF7ED',
          200: '#F2E5D0',
          300: '#DCC6A6',
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
    },
  },
  plugins: [],
};
