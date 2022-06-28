/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'identity': 'linear-gradient(270deg, #D61E1E 0%, #EB27CC 53.13%, #273BEB 100%)',
        'primary': '#171717',
        'secundary': '#2E2E2E',
        'text': '737373',
      }
    },
  },
  plugins: [],
}
