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
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(100%)" }, // Começa fora da tela (à direita)
          "100%": { transform: "translateX(-100%)" }, // Sai pela esquerda
        },
        scrollRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "scroll-left": "scrollLeft 25s linear infinite",
        "scroll-right": "scrollRight 25s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
