import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primary: "#11749e",
      },
      colors: {
        primary: "#11749e",
      },
      letterSpacing: {
        "18px": "18px",
      },
      boxShadow: {
        custom: "10px 10px 0 #d4d7d5",
      },
    },
  },
  plugins: [],
};
export default config;
