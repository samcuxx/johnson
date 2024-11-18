import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light mode
        "sa-light-primary": "#FFD700",
        "sa-light-foregroung": "#D2D2D2",
        "sa-light-bg": "#F8F8F8",
        "sa-light-bg2": "#E9E9E9",
        "sa-light-accent": "#222222",

        // dark mode
        "sa-dark-primary": "#FFD700",
        "sa-dark-foregroung": "#131C31",
        "sa-dark-bg": "#0F172A",
        "sa-dark-bg2": "#E9E9E9",
        "sa-dark-accent": "#b9e0f2",
        "sa-dark-text-low": "#66768F",
        "sa-dark-text-main": "#94A9C9",
        "sa-dark-accent": "#b9e0f2",
        "sa-dark-border": "#222F43",
        // neutral
        "sa-blue": "#0ea5ea",
        "sa-blue2": "#0bd1d1",
      },
    },
  },
  plugins: [],
} satisfies Config;
