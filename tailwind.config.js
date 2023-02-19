module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: "class",
  daisyui: {
    themes: ["luxury"],
  },
  plugins: [require("daisyui")],
};
