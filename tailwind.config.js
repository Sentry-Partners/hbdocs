/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 18px 50px rgba(15, 23, 42, 0.18)",
      },
    },
  },
  plugins: [],
};
