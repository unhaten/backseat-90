'use client'

import { getImages } from '@/api/server-actions'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useEffect } from 'react'
import { setImage } from './model/image.slice'

const BASE_URL = 'http://localhost:8000/public/'

export const BackgroundImage = () => {
	const dispatch = useAppDispatch()
	const image = useAppSelector(state => state.image)

	const { data, isRefetching } = useQuery({
		queryKey: ['image-generator'],
		queryFn: () => getImages(image.imageId || undefined),
		staleTime: 0,
		refetchOnMount: false,
		refetchOnWindowFocus: false
	})

	useEffect(() => {
		if (data?.imageId && data.imageId !== image.imageId) {
			dispatch(setImage(data.imageId))
		}
	}, [data, image.imageId, dispatch])

	// TODO: make an animation between image changes
	// TODO: disable button while pending
	if (isRefetching)
		return (
			<Image
				className='absolute top-0 left-0 z-0 w-full h-full object-cover md:object-fill object-center'
				src={'/tv-loading.webp'}
				alt='the gif'
				unoptimized
				fill
			/>
		)
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
