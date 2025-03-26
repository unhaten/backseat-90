import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux'
import { RefObject, useEffect } from 'react'
import { setVolume } from '../model/player.slice'

export const useAudioVolume = (
	audioRef: RefObject<HTMLAudioElement | null>
) => {
	const dispatch = useAppDispatch()
	const volume = useAppSelector(state => state.player.volume)

	useEffect(() => {
		if (typeof window === 'undefined') return

		const storageVolume = localStorage.getItem('playerVolume')
		const parsedVolume = storageVolume !== null ? Number(storageVolume) : 50
		dispatch(setVolume(parsedVolume))

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		if (!audioRef.current) return

		audioRef.current.volume = volume / 100
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [volume, audioRef.current])
}
