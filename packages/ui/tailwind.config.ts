import type { Config } from 'tailwindcss';
import config from '@betbase/tailwind/config';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: { ...config.theme },

	plugins: []
} satisfies Config;
