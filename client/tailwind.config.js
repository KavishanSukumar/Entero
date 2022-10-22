module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}",'./node_modules/tw-elements/dist/js/**/*.js',"./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      width: {
        128: "32rem",
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin','flowbite/plugin')
  ],
};
