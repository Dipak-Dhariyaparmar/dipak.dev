import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        graphite: "#111214",
        fog: "#f6f3ed",
        line: "rgba(255,255,255,0.12)",
        signal: "#6ee7b7",
        ember: "#f97316",
        violet: "#8b5cf6"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 80px rgba(110, 231, 183, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
