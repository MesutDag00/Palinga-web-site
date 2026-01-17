import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        trust: {
          blue: "#0052CC",
        },
        healing: {
          teal: "#00A3BF",
        },
        clean: {
          white: "#F4F5F7",
        },
        ink: {
          black: "#0B1220",
        },
        soft: {
          gray: "#6B7280",
          line: "#E5E7EB",
          surface: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "soft-sm": "0 6px 18px rgba(11, 18, 32, 0.08)",
        soft: "0 10px 28px rgba(11, 18, 32, 0.10)",
      },
    },
  },
  plugins: [],
} satisfies Config;


