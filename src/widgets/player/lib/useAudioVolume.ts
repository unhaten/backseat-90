import { useAppSelector } from '@/lib/hooks/redux'
import { RefObject, useEffect } from 'react'

export const useAudioVolume = (
	audioRef: RefObject<HTMLAudioElement | null>
) => {
	const volume = useAppSelector(state => state.player.volume)

	useEffect(() => {
		// * sets volume to the state's value on load (once a time)
		if (audioRef) {
			audioRef.current!.volume = volume / 100
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		if (audioRef) {
			audioRef.current!.volume = volume / 100
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [volume])
}
