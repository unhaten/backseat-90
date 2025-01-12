import Image from 'next/image'
// import { useEffect, useRef, useState } from 'react'

type Props = {
	thumbnail: string
}
export const SongImage = ({ thumbnail }: Props) => {
	// const [imageLoaded, setImageLoaded] = useState(false)
	// const imageRef = useRef<HTMLImageElement>(null)

	// useEffect(() => {
	// 	setImageLoaded(false)
	// 	if (!imageRef || !imageRef.current) return
	// 	imageRef.current.setAttribute('href', thumbnail)
	// 	imageRef.current.onload = () => setImageLoaded(true)
	// }, [imageRef, thumbnail])

	return (
		<div className='relative min-w-16 min-h-16 rounded-lg'>
			<Image
				// src={imageLoaded ? thumbnail : '/song-placeholder.png'}
				src={thumbnail}
				fill
				alt='song placeholder'
				className='rounded-lg'
			/>
		</div>
	)
}
