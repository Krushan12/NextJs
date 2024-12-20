/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#13151a",
        foreground: "#ffffff",
        card: "#1f2937",
        "card-foreground": "#ffffff",
        primary: "#3b82f6",
        "primary-foreground": "#ffffff",
      },
    },
  },
  plugins: [],
};