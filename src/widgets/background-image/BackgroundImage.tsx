'use client'

import { useAppSelector } from '@/lib/hooks/redux'
import { API_PUBLIC_URL } from '@/lib/config'
import { useBackgroundImage } from '@/lib/hooks/react-query'
import { Background } from './ui/background/Background'
import { useSyncBackgroundIMage } from './model/useSyncBackgroundImage'
import { toast } from 'sonner'

export const BackgroundImage = () => {
	const { imageId } = useAppSelector(state => state.image)

	const { data, isRefetching } = useBackgroundImage(imageId)
	useSyncBackgroundIMage({ data, imageId })

	toast(JSON.stringify(data))

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
