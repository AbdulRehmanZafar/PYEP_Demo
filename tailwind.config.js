/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#087F3F",
        deep: "#056B35",
        fresh: "#16A05D",
        soft: "#EAF7EF",
        pale: "#F4FBF6",
        off: "#FAFCFA",
        ink: "#172019",
        sub: "#5D6B62",
        border: "#DDE9E0",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
      },
    },
  },
  plugins: [],
};
