import { useAppDispatch } from '@/lib/hooks/redux'
import { useEffect } from 'react'
import { setImage } from './image.slice'
import { BackgroundImageData } from './image.type'

type Props = {
	imageId: number
	data: BackgroundImageData | undefined
	isSuccess: boolean
}

export const useSyncBackgroundImage = ({ data, imageId, isSuccess }: Props) => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (isSuccess && data?.imageId && data.imageId !== imageId) {
			dispatch(setImage(data.imageId))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, imageId])
}
