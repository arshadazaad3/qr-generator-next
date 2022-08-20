const path = require("path");

module.exports = {
  content: [path.join(__dirname, "./src/pages/**/*.{js,ts,jsx,tsx}")],
  theme: {
    extend: {},
    screens: {
      sm: "400px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      body: ["Open Sans"],
    },
  },
  plugins: [],
};
