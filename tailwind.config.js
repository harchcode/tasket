module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.css", "./src/**/*.ts"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        108: "27rem",
        120: "30rem",
        132: "33rem"
      }
    }
  },
  variants: {},
  plugins: []
};
