/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'background': '#000000',
        'surface': '#0D0D0D',
        'surface-hover': '#1A1A1A',
        'border': '#333333',
        'accent': '#FF8C42',
        'accent-hover': '#E67A33'
      },
      fontFamily: {
        mono: ['var(--font-mono)']
      }
    },
  },
  plugins: [],
}