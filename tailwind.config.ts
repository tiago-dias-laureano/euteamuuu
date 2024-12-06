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
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "scroll-left": "scrollRight 30s linear infinite",
        "scroll-right": "scrollLeft 30s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        html: {
          scrollBehavior: "smooth",
          overscrollBehavior: "contain", // Evita movimentos bruscos ao atingir os limites
        },
        body: {
          transition: "transform 0.3s ease-out", // Adiciona suavidade extra em interações rápidas
        },
      });
    },
  ],
} satisfies Config;
