/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "form-img": "url('src/assets/images/background.jpg')",
      },
    },
  },
  plugins: [],
};
