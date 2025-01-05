/** @type {import('tailwindcss').Config} */
export default {
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
        navTextColor: "var(--navTextColor)",
        navIconsColor: "var(--navIconsColor)",
        heroMainTextColor: "var(--heroMainTextColor)",
        heroMainSecondaryTextColor: "var(--heroMainSecondaryTextColor)",
        heroSubTextColor: "var(--heroSubTextColor)",
        universalButtonColor: "var(--universalButtonColor)",
        universalHeadingTextColor: "var(--universalHeadingTextColor)",
        universalContentTextColor: "var(--universalContentTextColor)",
      },
    },
    fontFamily: {
      workSansRegular: ["WorkSansRegular", "sans-serif"],
      workSansMedium: ["var(--dynamic-font-family)", "sans-serif"],
      workSansItalic: ["WorkSansItalic", "sans-serif"],
      workSansSemiBold: ["WorkSansSemiBold", "sans-serif"],
      heroSectionDynamic: ["var(--hero-font-family)", "sans-serif"],
    },
  },
  plugins: [],
};
