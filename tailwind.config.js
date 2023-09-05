/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // pastel theme
        "weather-primary": "#e86252",
        "weather-secondary": "#ebb3a9",
        // blue theme
        // "weather-primary": "#00668A",
        // "weather-secondary": "#004E71",
        // red theme
        // "weather-primary": "#800e13",
        // "weather-secondary": "#ad2831",
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
};
