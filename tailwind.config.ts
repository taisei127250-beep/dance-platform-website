import type { Config } from "tailwindcss";

const config: Config = {
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
        primary: {
          orange: "#FF9F42",
          blue: "#3B9BFF",
        },
        brand: {
          orange: "#FF9F42",
          blue: "#3B9BFF",
          dark: "#1A1D29",
        },
      },
    },
  },
  plugins: [],
};
export default config;
