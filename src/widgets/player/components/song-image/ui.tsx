import { SongPlaceholder } from '@/components'
import { Skeleton } from '@/components/ui'
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

	// console.log(thumbnail)

	return (
		<>
			<div className='relative min-w-16 min-h-16 rounded-lg'>
				{thumbnail && (
					<Image
						src={thumbnail}
						fill
						alt='song placeholder'
						className='rounded-lg z-[1]'
					/>
				)}
				<Skeleton className='z-0'>
					<SongPlaceholder />
				</Skeleton>
			</div>
		</>
	)
}
