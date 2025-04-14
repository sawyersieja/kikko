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
          card: "var(--card)",
          border: "var(--border)",
          accent: "var(--accent)",
          muted: "var(--muted)",
          primary: "var(--primary)",
          secondary: "var(--primary-foreground)",
          navbar: "var(--navbar)",
          footer: "var(--footer)",
          overlay: "var(--overlay)",
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