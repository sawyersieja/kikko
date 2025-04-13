/** @type {import('tailwindcss').Config} */
const config = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
            background: "var(--background)",
            foreground: "var(--foreground)",
        },
        fontFamily: {
            sans: ["var(--font-sans)", "sans-serif"],
        },
      },
    },
    darkMode: "class",
    plugins: [],
  };
  
  export default config;