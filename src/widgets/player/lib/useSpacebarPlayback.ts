import { useEffect } from 'react'
import { usePlaybackControls } from './usePlaybackControls'

export const useSpacebarPlayback = () => {
	const { togglePlayback } = usePlaybackControls()

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.code === 'Space') {
				event.preventDefault()
				togglePlayback()
			}
		}

		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
}
