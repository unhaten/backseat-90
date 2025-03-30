import { RefObject, useEffect } from 'react'

export const useMobilePreload = (
	audioRef: RefObject<HTMLAudioElement | null>
) => {
	useEffect(() => {
		if (!audioRef.current) return
		audioRef.current.load() //* forcing because mobile browsers does not preload music smh
		// handleLoad()
	}, [audioRef])
}
