/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coffee-dark': '#A79277',
        'coffee-medium': '#D1BB9E',
        'coffee-light': '#EAD8C0',
        'coffee-cream': '#FFF2E1',
        'coffee-lightgreen': '#FFF2E1',
        'coffee-green': '#AFD198',
      }
    },
  },
  plugins: [],
}
