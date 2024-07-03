/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-dark': '#15202B',
        'red-vivid': '#E52D27',
        'off-white': '#F5F5F5',
        'gray-light': '#C8C8C8',
        'mint-green': '#9AECDB',
        gold: '#FFD700'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
