import { useConnectionToRadio } from '@/lib/hooks/react-query'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux'
import { useQueryClient } from '@tanstack/react-query'
import { setStreamUrl, togglePlayer } from '../model/player.slice'

export const usePlaybackControls = () => {
	const queryClient = useQueryClient()
	const { refetch: getStreamUrl, isFetching } = useConnectionToRadio()

	const dispatch = useAppDispatch()
	const { isPlaying } = useAppSelector(state => state.player)

	const togglePlayback = async () => {
		if (!isPlaying) {
			const { data } = await getStreamUrl()
			if (data?.success) {
				dispatch(setStreamUrl(data.value.url))
				dispatch(togglePlayer())
			}
		} else {
			dispatch(togglePlayer())
			dispatch(setStreamUrl(undefined))
			queryClient.resetQueries({ queryKey: ['stream-url'] })
		}
	}

	return { togglePlayback, isFetching }
}
