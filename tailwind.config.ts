import type { Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['var(--font-roboto)'],
				bebasNeue: ['var(--font-bebasNeue)'],
				rockSalt: ['var(--font-rockSalt)']
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			}
		}
	},
	plugins: []
} satisfies Config
