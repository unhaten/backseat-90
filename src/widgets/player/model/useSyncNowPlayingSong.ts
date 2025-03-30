import { useEffect } from 'react'
import { useAppDispatch } from '@/lib/hooks/redux'
import { setSong } from '@/entities/song'
import { ServerActionResult } from '@/lib/utils'
import { setListeners, StationData } from '..'

export const useSyncNowPlayingSong = (
	data?: ServerActionResult<StationData>
) => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (data && data.success) {
			dispatch(setSong(data.value.song))
			dispatch(setListeners(data.value.currentListeners))
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data])
}
