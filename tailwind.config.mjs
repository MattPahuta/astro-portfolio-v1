import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'];
export const theme = {
	screens: {
		xs: '480px',
		sm: '640px',
		md: '768px',
		lg: '1024px',
		xl: '1280px',
	},
	colors: {
		black: '#000',
		white: '#fff',
		red: '#E54B4B',
		mint: '#21D19F',
		raisin: '#1e1e2e',
		gray: '#586F7C',
	},
	fontFamily: {
		sans: ['Inter', 'sans-serif'],
		monospace: ['Source Code Pro', "monospace"],
	},
	fontSize: {
		xs: '.75rem',
		sm: '.875rem',
		tiny: '.875rem',
		base: '1rem',
		lg: '1.125rem',
		xl: '1.25rem',
		'2xl': '1.5rem',
		'3xl': '1.875rem',
		'4xl': '2.25rem',
		'5xl': '3rem',
	},
	letterSpacing: {
		wide: '.025em',
	},
};
export const plugins = [
	plugin(function ({ addBase, theme }) {
		addBase({
			h2: {
				letterSpacing: theme('letterSpacing.wide'),
				fontWeight: 'bold',
			},
			li: {
				letterSpacing: theme('letterSpacing.wide'),
			},
		});
	}),
];
