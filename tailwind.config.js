/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        /* BRAND */
        primary: "#3E5B3C",
        "primary-dark": "#2F4A2E",
        accent: "#C5A033",

        /* TEXT */
        "text-heading": "#1F2A1F",
        "text-subheading": "#4A4A4A",
        "text-body": "#2A2A2A",
        "text-muted": "#7A7A7A",

        /* BACKGROUND */
        "bg-page": "#FAF8F2",

        /* CARD */
        "card-gold": "#EEDAA3",
        "card-gold-hover": "#F5E7C2",
        "card-white": "rgba(255,255,255,0.92)",
        "card-white-hover": "rgba(255,255,255,0.96)",

        /* BORDER */
        "border-soft": "#E6DFC9",
      },

      boxShadow: {
        gold: "0 4px 20px rgba(0,0,0,0.08)",
        soft: "0 4px 16px rgba(0,0,0,0.05)",
      },

      borderRadius: {
        xl: "12px",
      },

      backdropBlur: {
        glass: "10px",
      },

      backgroundImage: {
        pattern: "url('/public/images/site/pattern2.png')",
      },
    },
  },

  plugins: [],
};
