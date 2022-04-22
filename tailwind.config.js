const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: ["./app/**/*.jsx"],
  theme: {
    extend: {
      screens: {
        lg: "1024px",
      },
      minWidth: {
        "200-px": "200px",
        "150-px": "175px",
      },

      width: {
        "50-vw": "50vw",
        "20-vw": "20vw",
        "30-vw": "30vw",
        "25-vw": "25vw",
        "40-vw": "40vw",
      },
      margin: {
        "60-vw": "60vw",
        "20-vw": "20vw",
        "25-vw": "25vw",
        "30-vw": "30vw",
        "40-vw": "40vw",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};
