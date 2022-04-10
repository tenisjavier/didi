module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
        "05": "0.5px",
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
    extend: { display: ["group-focus"] },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
