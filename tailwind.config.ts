import type { Config } from 'tailwindcss';

const config: Config = {
  // Use class instead of media query for dark mode
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Add custom text colors for better visibility
        text: {
          light: '#171717', // Dark text for light mode
          dark: '#ffffff',  // White text for dark mode
        },
        textSecondary: {
          light: '#404040', // Darker gray for light mode
          dark: '#e5e5e5',  // Lighter gray for dark mode
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};

export default config; 