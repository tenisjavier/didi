module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        grey:{
          333: "#333333"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
