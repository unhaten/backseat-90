'use client'

import { getImages } from '@/api/server-actions'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useEffect } from 'react'
import { setImage } from './model/image.slice'
import { toast } from 'sonner'
import { API_PUBLIC_URL } from '@/lib/config'

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
		if (
			data?.success &&
			data?.value.imageId &&
			data.value.imageId !== image.imageId
		) {
			dispatch(setImage(data.value.imageId))
		}
		if (!data?.success) {
			toast.warning('Error', { description: data?.error })
		}
	}, [data, image.imageId, dispatch])

	if (isRefetching)
		return (
			<Image
				className='absolute top-0 left-0 z-0 w-full h-full object-cover md:object-fill object-center'
				src={'/tv-loading.webp'}
				alt='background-image'
				unoptimized
				fill
			/>
		)
	return data?.success ? (
		data?.value.background && (
			<Image
				className='absolute top-0 left-0 z-0 w-full h-full object-cover md:object-fill object-center'
				// src={API_SERVER_URL + data.value.background}
				src={API_PUBLIC_URL + data.value.background}
				alt='background-image'
				unoptimized
				fill
			/>
		)
	) : (
		<Image
			className='absolute top-0 left-0 z-0 w-full h-full object-cover md:object-fill object-center'
			// src={API_SERVER_URL + data.value.background}
			src={'/vinyl-spin.webp'}
			alt='background-image'
			unoptimized
			fill
		/>
	)
}
