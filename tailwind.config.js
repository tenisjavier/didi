module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
