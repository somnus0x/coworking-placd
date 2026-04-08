/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#0a0a0a',
          raised: '#141414',
          overlay: '#1a1a1a',
        },
        accent: {
          DEFAULT: '#e8c547',
          dim: '#b89a2e',
        },
        muted: '#737373',
        border: '#262626',
      },
    },
  },
  plugins: [],
};
