module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        grey: {
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
