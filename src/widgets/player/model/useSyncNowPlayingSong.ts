import { useEffect } from 'react'
import { useAppDispatch } from '@/lib/hooks/redux'
import { setSong } from '@/entities/song'
import { setListeners, StationData } from '..'

type Props = {
	data: StationData | undefined
	isSuccess: boolean
}

export const useSyncNowPlayingSong = ({ data, isSuccess }: Props) => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (isSuccess && data) {
			dispatch(setSong(data.song))
			dispatch(setListeners(data.currentListeners))
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data])
}
