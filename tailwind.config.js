/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./components/**/*.{js,jsx,ts,tsx}", "./App.js"],
  theme: {
    colors: {
      primary: "#463F3A",
      secondary: "#8A817C",
      tertiary: "#BCB8B1",
      white: "#F4F3EE",
      accent: "#E0AFA0",
    },
    extend: {},
  },
  plugins: [],
}
