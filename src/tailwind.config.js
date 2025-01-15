/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Indigo
        secondary: "#6366F1", // Light Indigo
        accent: "#A78BFA", // Soft Purple
        background: "#F9FAFB", // Light Gray
        text: "#1F2937", // Dark Gray
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
