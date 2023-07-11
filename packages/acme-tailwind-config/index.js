const path = require("path");
module.exports = {
  content: [
    path.resolve(
      process.cwd(),
      __dirname,
      "../acme-components/src/**/*.{ts,tsx}"
    ),
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  darkMode: "class",
  plugins: [],
};
