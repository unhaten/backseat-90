'use client'

import { useAppSelector } from '@/lib/hooks/redux'
import { API_PUBLIC_URL } from '@/lib/config'
import { useBackgroundImage } from '@/lib/hooks/react-query'
import { Background } from './ui/background/Background'
import { useSyncBackgroundImage } from './model/useSyncBackgroundImage'
import { useBackgroundError } from './lib/useBackgroundError'

export const BackgroundImage = () => {
	const { imageId } = useAppSelector(state => state.image)

	const { data, isSuccess, isError, isLoading, isRefetching, error } =
		useBackgroundImage(imageId)

	useSyncBackgroundImage({ data, imageId, isSuccess })
	useBackgroundError(isError, error?.message)

	if (isLoading || isRefetching)
		return <Background src={'/tv-loading.webp'} />

	if (isError) return <Background src={'/vinyl-spin.webp'} />

	if (isSuccess) return <Background src={API_PUBLIC_URL + data.background} />
}
