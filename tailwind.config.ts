import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true, // always center the layout
      // padding: "1rem", // base padding for small screens
      screens: {
        sm: "100%", // mobile: take full width
        md: "90%", // tablets/laptops: 90% width
        lg: "80%", // keep consistent 90%
        xl: "80%", // for screens < 1600px, still 90%
        "2xl": "1600px", // max width stops growing after 1600px
      },
    },
    extend: {
      /* ------------------------------ 🎨 COLORS ------------------------------ */
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      /* -------------------------- 🧱 TYPOGRAPHY (Clamp) -------------------------- */
      // fontSize: {
      //   h1: ["clamp(36px, 4.5vw, 84px)", { lineHeight: "1.1" }],
      //   h2: ["clamp(40px, 5vw, 148px)", { lineHeight: "1.1" }],
      //   h3: ["clamp(24px, 3.2vw, 48px)", { lineHeight: "1.2" }],
      //   h5: ["clamp(18px, 2vw, 36px)", { lineHeight: "1.3" }],
      //   h6: ["clamp(16px, 1.8vw, 32px)", { lineHeight: "1.4" }],
      //   p: ["clamp(12px, 1vw, 18px)", { lineHeight: "1.6" }],
      //   p1: ["clamp(14px, 1.1vw, 20px)", { lineHeight: "1.6" }],
      // },

      /* -------------------------- 🌈 GRADIENTS, SHADOWS -------------------------- */
      backgroundImage: {
        "gradient-dark": "var(--gradient-dark)",
        "gradient-subtle": "var(--gradient-subtle)",
      },
      boxShadow: {
        elevated: "var(--shadow-elevated)",
      },
      transitionProperty: {
        smooth: "var(--transition-smooth)",
      },

      /* ------------------------------ 🟢 RADIUS ------------------------------ */
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      /* ---------------------------- 🎬 ANIMATIONS ---------------------------- */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
