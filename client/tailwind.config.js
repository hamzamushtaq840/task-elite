/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbar: "#942D3B",
        footer: "#010C29",
        paragraph: '#404F7A',
        heading: '#19284E',
        button: '#942D3B',
      }
    },
  },
  plugins: [],
}