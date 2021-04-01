module.exports = {
  important: "#root",
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
        "800": "calc(100% - 400px);",
      },
      minWidth: {
        "14": "56px",
        "16": "64px",
      },
      height: {
        "111": "calc(100% - 111px)",
        "094": "calc(100% - 94px)",
        "400": "calc(100% - 40px)",
        "455": "455px",
        "620": "calc(100% - 62px)",
        "700": "calc(100% - 40px)",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked", "active"],
      margin: ["first", "last"],
      borderWidth: ["first", "last"],
    },
  },
  plugins: [],
};
