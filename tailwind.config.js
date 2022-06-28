/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'identity': 'linear-gradient(270deg, #D61E1E 0%, #EB27CC 53.13%, #273BEB 100%)',
        'primary': {
          900: '#171717',
          800: '#202020',
          700: '#212121',
          600: '#232323',
          500: '#262626',
          400: '#2D2D2D',
          300: '#3B3B3B',
          200: '#575757',
          100: '#8F8F8F',
        },
        'heading': '#FFFFFF',
        'text': '#737373',
      }
    },
  },
  plugins: [],
}
