const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.tsx"],
  important: "#root",
  darkMode: false, // or 'media' or 'class'
  theme: {
    inset: {
      "0": 0,
      "-400": "-400px",
    },
    colors: {
      blue: {
        dark: "#5485BB",
      },
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    boxShadow: {
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "7px 13px 12px -14px rgba(0,0,0,0.57)",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#F0F3F9",
      light: "#F8F8F9",
      eroom: "#7AA0C9",
      opacity: "rgba(0, 0, 0, 0.5)",
    }),
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "36": "36px",
      "42": "42px",
    },

    extend: {
      width: {
        "136": "calc(50% - 4px)",
        "200": "200px",
        "340": "340px",
        "400": "400px",
        "760": "calc(100% - 76px)",
        "680": "calc(100% - 68px)",
        "700": "calc(100% - 340px)",
        "800": "calc(100% - 400px);",
        "440": "calc(100% - 20px)",
        "768": "768px",
        "1024": "1024px",
        "1260": "1260px",
        "1280": "1280px",
      },
      minWidth: {
        "14": "56px",
        "16": "64px",
        "320": "320px",
      },
      height: {
        "42": "42px",
        "45": "45px",
        "64": "64px",
        "88": "80px",
        "92": "92px",
        "110": "110px",
        "111": "calc(100% - 111px)",
        "184": "184px",
        "094": "calc(100% - 94px)",
        "366": "calc(50% - 40px)",
        "400": "calc(100% - 40px)",
        "455": "455px",
        "630": "calc(100% - 60px)",
        "620": "calc(100% - 62px)",
        "700": "calc(100% - 40px)",
        "600": "calc(100% - 80px)",
      },
      lineHeight: {
        "42": "42px",
      },
      translate: {
        "174": "174px",
      },
      padding: {
        "100": "100%",
      },
      margin: {
        "64": "64px",
        "80": "80px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked", "active"],
      margin: ["first", "last", "odd", "even"],
      borderWidth: ["first", "last", "odd", "even"],
    },
  },
  plugins: [],
};
