// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'neon-blue': '#4dffff',
        'neon-pink': '#ff00ff',
        'cyber-dark': '#0f172a',
        'cyber-border': '#1e293b',
      },
      fontFamily: {
        sans: ['"Orbitron"', 'sans-serif'], 
      },
      boxShadow: {
        'neon-blue': '0 0 5px #4dffff, 0 0 10px #4dffff, 0 0 20px #4dffff',
        'neon-pink': '0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff',
      },
      animation: {
        'text-reveal': 'text-reveal 0.5s ease-in-out forwards',
      },
      keyframes: {
        'text-reveal': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    // CRITICAL FIX: Define custom components here to bypass PostCSS compile errors
    function ({ addComponents }) {
      addComponents({
        '.cyber-btn': {
          // All the utility classes that were causing the error
          '@apply relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-neon-blue to-neon-pink group-hover:from-neon-blue group-hover:to-neon-pink hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-300;': {},
          
          // Style for the inner span
          '& span': {
            '@apply relative px-5 py-2.5 transition-all ease-in duration-75 bg-cyber-dark rounded-md group-hover:bg-opacity-0;': {},
          },
        },
      })
    }
  ],
};

export default config;