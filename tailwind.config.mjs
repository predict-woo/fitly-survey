/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'] // Set Pretendard as default sans font
      },
      colors: {
        primary: '#0B00E2',
        secondary: '#EDF0F3',
        customGray: {
          100: '#FAFAFA',
          300: '#E0E0E0'
        }
      }
    }
  },
  plugins: []
}
