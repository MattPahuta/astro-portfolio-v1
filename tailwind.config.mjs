/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
// const { addDynamicIconSelectors } = require('@iconify/tailwind');

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
			fontFamily: {
				'sans': ['Inter', ...defaultTheme.fontFamily.sans],
				'mono': ['Inconsolata', ...defaultTheme.fontFamily.mono],
			}
		},
  },
  plugins: [
    // addDynamicIconSelectors(),
  ],
};