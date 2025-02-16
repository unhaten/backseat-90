import localFont from 'next/font/local'

// TODO: instead of importing only woff2 by path, i wanna import also ttf for legacy browsers just in case

const roboto = localFont({
	src: [
		{
			path: '../../assets/fonts/roboto-v47-cyrillic_latin-regular.woff2',
			weight: '400',
			style: 'normal'
		},
		{
			path: '../../assets/fonts/roboto-v47-cyrillic_latin-300.woff2',
			weight: '300',
			style: 'normal'
		},
		{
			path: '../../assets/fonts/roboto-v47-cyrillic_latin-500.woff2',
			weight: '500',
			style: 'normal'
		},
		{
			path: '../../assets/fonts/roboto-v47-cyrillic_latin-700.woff2',
			weight: '700',
			style: 'normal'
		},
		{
			path: '../../assets/fonts/roboto-v47-cyrillic_latin-900.woff2',
			weight: '900',
			style: 'normal'
		}
	],
	display: 'swap',
	variable: '--font-roboto'
})

const bebasNeue = localFont({
	src: [
		{
			path: '../../assets/fonts/bebas-neue-v14-latin-regular.woff2',
			weight: '400',
			style: 'normal'
		}
	],
	display: 'swap',
	variable: '--font-bebasNeue'
})

const rockSalt = localFont({
	src: [
		{
			path: '../../assets/fonts/rock-salt-v22-latin-regular.woff2',
			weight: '400',
			style: 'normal'
		}
	],
	display: 'swap',
	variable: '--font-rockSalt'
})

const badScript = localFont({
	src: [
		{
			path: '../../assets/fonts/bad-script-v17-cyrillic_latin-regular.woff2',
			weight: '400',
			style: 'normal'
		}
	],
	display: 'swap',
	variable: '--font-badScript'
})

const alumni = localFont({
	src: [
		{
			path: '../../assets/fonts/alumni-sans-v18-cyrillic_latin-regular.woff2',
			weight: '400',
			style: 'normal'
		},
		{
			path: '../../assets/fonts/alumni-sans-v18-cyrillic_latin-600.woff2',
			weight: '600',
			style: 'normal'
		},
		{
			path: '../../assets/fonts/alumni-sans-v18-cyrillic_latin-800.woff2',
			weight: '800',
			style: 'normal'
		}
	],
	display: 'swap',
	variable: '--font-alumni'
})

const fonts = {
	roboto,
	bebasNeue,
	rockSalt,
	badScript,
	alumni
}

export default fonts
