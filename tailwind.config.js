/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'brand-gray-1': '#F7F7F7',
        'brand-gray-2': '#E5E5E5',
        'brand-gray-3': '#D9D9D9'
      }
    }
  },
  plugins: []
}
