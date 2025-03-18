import { useAppSelector } from '@/lib/hooks/redux'
import { RefObject, useEffect } from 'react'

export const useAudioVolume = (
	audioRef: RefObject<HTMLAudioElement | null>
) => {
	const volume = useAppSelector(state => state.player.volume)

	useEffect(() => {
		// * sets volume to the state's value on initial load
		if (audioRef.current) {
			audioRef.current.volume = volume / 100
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [audioRef.current])

	useEffect(() => {
		if (!audioRef.current) return

		audioRef.current.volume = volume / 100
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [volume, audioRef.current])
}
