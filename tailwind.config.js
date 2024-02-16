/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '450px',
      'sm2': '550px',
      'md': '800px',
      'lg': '1024px',
      'xl': '1280px',
    },

    extend: {},
  },
  plugins: [],
}

