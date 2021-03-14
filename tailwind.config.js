module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {
      "36": "36px",
      "42": "42px",
    },
    extend: {
      width: {
        "400": "400px",
        "760": "calc(100% - 76px)",
        "680": "calc(100% - 68px)",
      },
      minWidth: {
        "14": "56px",
        "16": "64px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
