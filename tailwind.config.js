/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coffee-dark': '#DBA979',
        'coffee-light': '#ECCA9C',
        'coffee-cream': '#E8EFCF',
        'coffee-green': '#AFD198',
      }
    },
  },
  plugins: [],
}
