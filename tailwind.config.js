/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0D1B2A',
        'ivory': '#F5F0E8',
        'accent-red': '#C0392B',
        'gold': '#D4A843',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'body': ['Source Serif 4', 'serif'],
      },
    },
  },
  plugins: [],
}
