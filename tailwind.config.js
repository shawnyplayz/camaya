/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: {
      workSansRegular: ["WorkSansRegular", "sans-serif"],
      workSansMedium: ["WorkSansMedium", "sans-serif"],
      workSansItalic: ["WorkSansItalic", "sans-serif"],
      workSansSemiBold: ["WorkSansSemiBold", "sans-serif"],
      ralewaySemiBold: ["RalewaySemiBold", "sans-serif"],
    },
  },
  plugins: [],
};
