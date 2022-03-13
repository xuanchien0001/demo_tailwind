module.exports = {
  mode: "jit",
  content: ["**/*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        35: "35px",
      },
      colors: {
        gray33: "#333",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
