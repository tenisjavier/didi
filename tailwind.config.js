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
          primary: "#333333",
        },
        orange: {
          primary: "#FF7D41",
        },
      },
    },
    backgroundImage: {
      "drv-orange": "url('../images/bg-image-orange-drv.jpg')",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
