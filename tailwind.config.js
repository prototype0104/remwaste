// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#2C061F', // Dark Purple
        secondary: '#374045', // Dark Gray
        accent: '#D89216', // Bright Orange
        light: '#E1D89F', // Light Beige
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-reverse': 'spin 1s linear infinite reverse',
      }
    },
  },
  plugins: [],
};

