import Image from 'next/image'

export const Background = ({ src }: { src: string }) => {
	return (
		<Image
			className='absolute top-0 left-0 z-0 w-full h-full object-cover md:object-fill object-center'
			src={src}
			alt='background-image'
			unoptimized
			fill
		/>
	)
}
