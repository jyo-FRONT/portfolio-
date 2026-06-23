/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Instrument Serif"', 'serif'],
      },
      colors: {
        bg: '#F7F6F3',
        ink: '#111110',
        muted: '#6B6B6B',
        border: '#E5E4E0',
        tag: '#EBEBEB',
      },
    },
  },
  plugins: [],
}
