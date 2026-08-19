/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#14161F",
        ink2: "#1C1F2C",
        paper: "#EDEFF3",
        paper2: "#DEE2EA",
        sky: "#38BDF8",
        violet: "#6C7BFF",
        muted: "#8A8FA3",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}

