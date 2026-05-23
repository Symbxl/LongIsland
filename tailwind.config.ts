import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0a0a0b",
          900: "#101012",
          800: "#16161a",
          700: "#1f1f24",
          600: "#2a2a30",
          500: "#4a4a52",
          400: "#7a7a82",
          300: "#a8a8b0",
          200: "#d4d4d8",
          100: "#ececef",
          50: "#f7f7f8",
        },
        gold: {
          50: "#fbf7ee",
          100: "#f4ecd3",
          200: "#e9d8a6",
          300: "#dcc079",
          400: "#cda854",
          500: "#c8a96a",
          600: "#a08240",
          700: "#7a6230",
          800: "#564525",
          900: "#3a2f1c",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      borderRadius: {
        none: "0",
        sm: "3px",
        DEFAULT: "3px",
        md: "3px",
        lg: "3px",
        xl: "3px",
        "2xl": "3px",
        "3xl": "3px",
        full: "9999px",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
