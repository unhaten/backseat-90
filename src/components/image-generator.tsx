'use client'

import { getImages } from '@/api/server-actions'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'

const BASE_URL = 'http://localhost:8000/public/'

export const ImageGenerator = () => {
	const { data } = useQuery({
		queryKey: ['image-generator'],
		queryFn: getImages,
		staleTime: 0,
		refetchOnMount: false,
		refetchOnWindowFocus: false
	})
	// TODO: make an animation between image changes
	// TODO: disable button while pending
	return (
		data?.background && (
			<Image
				className='absolute top-0 left-0 z-0 w-full h-full object-cover md:object-fill object-center'
				src={BASE_URL + data.background}
				alt='the gif'
				unoptimized
				fill
			/>
		)
	)
}
