/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  // Tailwind.config.js Customization Example
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      colors: {
        brand: {
          light: "#f0e7db",
          DEFAULT: "#d2bba0",
          "custom-dark": "#0f0f0f",
          "custom-light": "#1a1a2e",
          dark: "#121212", // Dark background color
          accent: "#1a1a2e",
        },
        textColor1: "#008cff",
        textColor2: "#fff",
        textColor3: "#737594",
        buttonBackground: "#0e0e30",
        boxShadow: {
          "gradient-shadow":
            "0 10px 15px -3px rgba(255, 65, 108, 0.5), 0 4px 6px -2px rgba(255, 75, 43, 0.5)",
        },
      },
      borderRadius: {
        xl: "1rem",
      },
      boxShadow: {
        "inner-glow": "inset 0 0 10px rgba(0, 0, 0, 0.5)",
        "outer-glow": "0 0 15px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        "gradient-button":
          "linear-gradient(90deg, #0065ff, #6942ef, #6554c0, #008cff)",
      },
      keyframes: {
        gradientRotate: {
          "0%, 100%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)" },
          "50%": { boxShadow: "0 0 25px rgba(0, 132, 255, 0.75)" },
        },
      },
      animation: {
        gradientRotate: "gradientRotate 4s ease-in-out infinite",
        pulseGlow: "pulseGlow 2s infinite",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [],
};
