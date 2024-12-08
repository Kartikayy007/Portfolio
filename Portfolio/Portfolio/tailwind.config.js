/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        impact: ['Impact', 'Haettenschweiler', 'Arial Narrow Bold', 'sans-serif'],
      },
      animation: {
        wave: 'wave 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

