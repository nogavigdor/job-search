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
        'brand-gray-1': '#dadce0',
        'brand-gray-2': '#1767d2',
        'brand-gray-3': '#137333'
      }
    }
  },
  plugins: []
}
