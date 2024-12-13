/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: "fadeIn .5s ease-in-out",
        wiggle: "wiggle 1s ease-in-out infinite",
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
          wiggle: {
            "0%, 100%": { transform: "rotate(-3deg)" },
            "50%": { transform: "rotate(3deg)" },
          },
        },
      },
      lineHeight: {
        68: "68px",
      },
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
