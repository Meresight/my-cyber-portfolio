// tailwind.config.ts

import type { Config } from "tailwindcss";
// --- FIX 1: Import the standard plugin utility ---
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#4cfffe',
        'neon-pink': '#ff0077',
        'dark-bg': '#0a0a0a',
      },
      boxShadow: {
        'neon-blue': '0 0 5px #4cfffe, 0 0 10px #4cfffe, 0 0 15px #4cfffe',
        'neon-pink': '0 0 5px #ff0077, 0 0 10px #ff0077, 0 0 15px #ff0077',
      },
      dropShadow: {
        'neon-blue': '0 0 2px #4cfffe',
        'neon-pink': '0 0 2px #ff0077',
      },
      fontFamily: {
        // You can add a custom cyber/monospace font here if desired
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  // --- FIX 2 & 3: Use 'plugin' utility and ensure array syntax is correct ---
  plugins: [
    // CRITICAL FIX: Define custom components here to bypass PostCSS compile errors
    // Wrap the function in 'plugin' utility to correctly type parameters
    plugin(function ({ addComponents }) {
      addComponents({
        '.cyber-btn': {
          '@apply bg-dark-bg text-neon-blue border-2 border-neon-blue px-6 py-3 uppercase tracking-widest text-lg font-bold transition-all duration-300': {},
          '&:hover': {
            '@apply bg-neon-blue text-dark-bg shadow-neon-blue': {},
            // The property below is a fix for the hover state sometimes causing visual glitches
            transform: 'translateY(-1px)', 
          },
          // This is a common utility for adding a glow effect on focus
          '&:focus': {
            '@apply outline-none ring-2 ring-neon-blue': {},
          },
        },
      })
    }), // <--- FINAL SYNTAX FIX: This comma is critical for array parsing!
  ],
};

export default config;