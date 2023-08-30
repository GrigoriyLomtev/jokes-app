/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Fira Sans"],
      montserrat: ["Montserrat"],
    },
    extend: {
      maxWidth: {
        default: "1600px",
      },
      colors: {
        search: "#656EC2",
      },
    },
  },
  plugins: [],
};
