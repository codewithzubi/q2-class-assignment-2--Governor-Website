import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Component/**/*.{js,ts,jsx,tsx,mdx}",  // Corrected Component folder path
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{html,js}" // Optional: Include if you're using HTML/JS in public folder
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
