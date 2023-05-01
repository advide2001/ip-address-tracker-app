/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobileBg": "url('/images/pattern-bg-mobile.png')",
        "hero-desktopBg": "url('/images/pattern-bg-desktop.png')",
      },
    },
  },
  plugins: [],
};
