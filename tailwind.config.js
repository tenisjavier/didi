module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./locales/**/*.{js,jsx,json}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      spacing: {
        100: "26rem",
        105: "28rem",
        110: "30rem",
        128: "768px",
        140: "880px",
      },
      colors: {
        gray: {
          primary: "#0F1419", //5A5A5A
          light: "#E7E7E7",
        },
        orange: {
          primary: "#FF7D41",
        },
        blue: {
          primary: "#007DFF",
        },
        green: {
          primary: "#16A34A",
        },
        whatsapp: {
          primary: "#25d366",
        },
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
    backgroundImage: {
      "drv-orange": "url('../images/bg-image-orange-drv.jpg')",
    },
  },
  variants: {
    extend: {},
    animation: ["motion-safe"],
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
