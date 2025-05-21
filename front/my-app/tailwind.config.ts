import type { Config } from "tailwindcss";
const flowbite = require("flowbite/plugin");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary (púrpura)
        primary: "#7C3AED",
        "primary-hover": "#8B5CF6", // más claro
        "primary-foreground": "#F8FAFC",

        // Secondary (gris claro)
        secondary: "#F1F5F9",
        "secondary-hover": "#E2E8F0", // más oscuro
        "secondary-foreground": "#0F172A",

        // Destructive (rojo)
        destructive: "#EF4444",
        "destructive-hover": "#F87171", // más claro
        "destructive-foreground": "#F8FAFC",

        // Input background (gris claro)
        input: "#E2E8F0",
        "input-hover": "#CBD5E1", // más oscuro

        // Ring
        ring: "#0F172A", // no requiere hover

        // Muted
        muted: "#F1F5F9",
        "muted-hover": "#E2E8F0", // más oscuro
        "muted-foreground": "#64748B",

        // Accent
        accent: "#F1F5F9",
        "accent-hover": "#E2E8F0", // más oscuro
        "accent-foreground": "#0F172A",
      },
    },
  },
  plugins: [flowbite],
} satisfies Config;
