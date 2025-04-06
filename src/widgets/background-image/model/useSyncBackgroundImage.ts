import { useAppDispatch } from '@/lib/hooks/redux'
import { useEffect } from 'react'
import { setImage } from './image.slice'

type Props = {
	imageId: number
	data: any
}

export const useSyncBackgroundIMage = ({ data, imageId }: Props) => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (
			data?.success &&
			data?.value.imageId &&
			data.value.imageId !== imageId
		) {
			dispatch(setImage(data.value.imageId))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, imageId])
}
