import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "3rem",
      screens: {
        sm: "500px",
        md: "700px",
        lg: "850px",
        xl: "850px",
        "2xl": "950px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        "move-border": {
          "100%": { "offset-distance": "100%" },
        },
        loadrot: {
          "0%": {
            rotate: "0deg",
            scale: "0",
          },
          "100%": {
            scale: "1",
          },
        },
        spotlight: {
          "0%": {
            transform: "rotateZ(0deg) scale(1)",
            filter: "blur(15px) opacity(0.5)",
          },
          "20%": {
            transform: "rotateZ(-1deg) scale(1.2)",
            filter: "blur(16px) opacity(0.6)",
          },
          "40%": {
            transform: "rotateZ(2deg) scale(1.3)",
            filter: "blur(14px) opacity(0.4)",
          },
          "60%": {
            transform: "rotateZ(-2deg) scale(1.2)",
            filter: "blur(15px) opacity(0.6)",
          },
          "80%": {
            transform: "rotateZ(1deg) scale(1.1)",
            filter: "blur(13px) opacity(0.4)",
          },
          "100%": {
            transform: "rotateZ(0deg) scale(1)",
            filter: "blur(15px) opacity(0.5)",
          },
        },
        "text-fade": {
          "100%": {
            color: "hsl(var(--foreground))",
          },
        },
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
      },
      animation: {
        "text-fade": "text-fade 2s linear forwards",
        shimmer: "shimmer 7s infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    require("@tailwindcss/typography"),
  ],
};
export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
