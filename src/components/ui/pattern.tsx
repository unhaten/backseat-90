import Image from 'next/image'

export const Pattern = () => {
	return (
		<>
			<Image
				className='
            absolute top-0 left-0 z-0 w-full h-full
            '
				src='/last-pattern.svg'
				alt='pattern'
				fill
			/>
		</>
	)
}
