/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#10B981",
          secondary: "#F3F4F6",
          accent: "#000000",
          neutral: "#374151",
          warning: "#EF4444",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
