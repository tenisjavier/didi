module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        '100': '26rem',
        '128': '768px',
      },
      colors: {
        gray: {
          primary: "#333333",
        },
        orange: {
          primary: "#FF7D41",
        },
      },
      display: ["group-hover"],
      visibility: ["group-hover"],
    },
    backgroundImage: {
      "drv-orange": "url('../images/bg-image-orange-drv.jpg')",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
