/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        atlas: {
          bg: "#090b12",
          panel: "#111521",
          line: "#20283a",
          muted: "#8791a8",
          accent: "#9b8cff",
          green: "#39d9a3"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(155, 140, 255, 0.16)"
      }
    }
  },
  plugins: []
};
