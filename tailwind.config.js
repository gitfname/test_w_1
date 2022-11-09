module.exports = {
  content: ["./src/**/*.{jsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms")
  ],
}
