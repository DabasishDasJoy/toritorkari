/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#10B981",
          secondary: "#EEF2FF",
          accent: "#F97316",
          neutral: "#374151",
          warning: "#EF4444",
        },
      },
    ],
  },
  theme: {
    fontFamily: {
      san: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
