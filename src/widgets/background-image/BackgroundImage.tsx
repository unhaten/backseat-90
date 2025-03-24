'use client'

import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux'
import { useEffect } from 'react'
import { setImage } from './model/image.slice'
import { API_PUBLIC_URL } from '@/lib/config'
import { useBackgroundImage } from '@/lib/hooks/react-query'
import { Background } from './ui/Background'

export const BackgroundImage = () => {
	const dispatch = useAppDispatch()
	const { imageId } = useAppSelector(state => state.image)

	const { data, isRefetching } = useBackgroundImage(imageId)
	useEffect(() => {
		if (
			data?.success &&
			data?.value.imageId &&
			data.value.imageId !== imageId
		) {
			dispatch(setImage(data.value.imageId))
		}
	}, [data, imageId, dispatch])

	if (isRefetching) return <Background src={'/tv-loading.webp'} />
	return data?.success ? (
		data?.value.background && (
			<Background
				// src={API_SERVER_URL + data.value.background}
				src={API_PUBLIC_URL + data.value.background}
			/>
		)
	) : (
		<Background src={'/vinyl-spin.webp'} />
	)
}
