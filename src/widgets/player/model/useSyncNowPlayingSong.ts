import { useEffect } from 'react'
import { useAppDispatch } from '@/lib/hooks/redux'
import { setSong } from '@/entities/song'
import { ServerActionResult } from '@/lib/utils'
import { StationData } from '..'

export const useSyncNowPlayingSong = (
	data?: ServerActionResult<StationData>
) => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (data && data.success) {
			dispatch(setSong(data.value.song))
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data])
}
