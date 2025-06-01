/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'hubspot': 'var(--hubspot)',
        'dark': 'var(--dark)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
        'background': 'var(--background)',
        'foreground': 'var(--foreground)',
      },
      fontFamily: {
        'serif': 'var(--font-serif)',
        'sans': 'var(--font-sans)',
      },
      borderWidth: {
        '1': '1px',
      }
    },
  },
  plugins: [],
} 