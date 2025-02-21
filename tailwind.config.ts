import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: "#C3AD60", // Add your golden-yellow color
        hovergold: '#806d2a'
      },
      fontFamily: {
        sarala : ["Sarala", "sans-serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;

