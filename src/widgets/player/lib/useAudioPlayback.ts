import { useAppSelector } from '@/lib/hooks/redux'
import { RefObject, useEffect } from 'react'

export const useAudioPlayback = (
	audioRef: RefObject<HTMLAudioElement | null>
) => {
	const { isPlaying, url } = useAppSelector(state => state.player)

	useEffect(() => {
		if (!audioRef.current) return
		const audio = audioRef.current

		if (url && isPlaying) {
			// audio.src = url
			audio.play().catch(err => console.warn(err))
		} else {
			audio.pause()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isPlaying, url])
}
