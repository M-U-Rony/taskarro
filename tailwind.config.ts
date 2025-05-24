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
        primary: '#B1B2FF',
        secondary: '#AAC4FF',
        surface: '#D2DAFF',
        background: '#EEF1FF',
        textDark: '#111827',
      },
    },
  },
  plugins: [],
} satisfies Config;
