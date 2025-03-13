'use client'

import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux'
import { useEffect, useRef } from 'react'
import { Controls } from './components'
import { setSong, Song } from '@/entities/song'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { connectToRadio, getRadioMetadata } from '@/api/server-actions'
import { PlayerLoader } from '@/components'
import { toast } from 'sonner'
import { setStreamUrl } from './model/player.slice'
// import { API_PUBLIC_URL } from '@/lib/config'

export const Player = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['player'],
		queryFn: getRadioMetadata
	})

	const queryClient = useQueryClient()
	const audioRef = useRef<HTMLAudioElement>(null)

	const dispatch = useAppDispatch()
	const player = useAppSelector(state => state.player)
	const song = useAppSelector(state => state.song)

	useEffect(() => {
		if (data && data.success) {
			dispatch(setSong(data.value.song))
		}
	}, [data, dispatch])

	// const handleLoad = useCallback(() => {
	// 	if (!audioRef.current) return

	// 	audioRef.current.onloadedmetadata = () => {
	// 		dispatch(setDuration(audioRef.current?.duration || 0))
	// 	}
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [])

	useEffect(() => {
		if (data && !data.success) {
			toast.warning('Error', { description: data.error })
		}
	}, [data])

	// useEffect(() => {
	// 	if (!audioRef.current) return

	// 	if (player.isPlaying) {
	// 		audioRef.current.play()
	// 	} else {
	// 		audioRef.current.pause()
	// 	}
	// }, [audioRef, player.isPlaying])

	// useEffect(() => {
	// 	if (!audioRef.current) return
	// 	audioRef.current.play()
	// }, [audioRef])

	useEffect(() => {
		if (!audioRef.current) return

		audioRef.current.volume = player.volume / 100
	}, [player.volume])

	useEffect(() => {
		if (!audioRef.current) return
		audioRef.current.load() //* forcing because mobile browsers does not preload music smh
		// handleLoad()
	}, [audioRef])

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		if (!audioRef.current) return
	// 		setCurrentTime(audioRef.current.currentTime)
	// 	}, 500)

	// 	return () => clearInterval(interval)
	// }, [])

	// useEffect(() => {
	// 	if (!audioRef.current) return
	// 	audioRef.current.onerror = () => {
	// 		console.warn('Stream error, retrying...')
	// 		toast.warning('Stream Disconnected', {
	// 			description: 'Trying to reconnect...'
	// 		})
	// 		queryClient.invalidateQueries({ queryKey: ['player'] })
	// 	}
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [])

	useEffect(() => {
		if (!audioRef.current) return

		if (player.isPlaying) {
			// If no URL or song, fetch first
			if (!player.url) {
				connectToRadio().then(data => {
					if (data.success) {
						dispatch(setSong(data.value.song)) // set song and url to player state
						dispatch(setStreamUrl(data))
						// Play after setting
						setTimeout(() => audioRef.current?.play(), 0)
					} else {
						toast.warning('Connection error', {
							description: data.error
						})
						dispatch(togglePlayer()) // Reset play state if failed
					}
				})
			} else {
				// Already have URL and song
				audioRef.current.play()
			}
		} else {
			// Pause if not playing
			audioRef.current.pause()
		}
	}, [player.isPlaying, player.song, player.url, dispatch])

	return (
		<div>
			<>
				{/* h = 82px mb-4 */}
				{data?.success && (
					<>
						<audio
							ref={audioRef}
							// src={
							// 	API_PUBLIC_URL +
							// 	(data?.success && data.value.file)
							// }
							preload='auto'
							// onLoadedMetadata={handleLoad}
							// src='http://localhost/listen/main_station/radio.mp3'
							src={player.url}
						/>
						<Song currentSong={song.data} />
					</>
				)}
				{isLoading && <PlayerLoader />}
				{!data?.success ? (
					<></>
				) : (
					<Controls
						isDataLoading={isLoading}
						isPlaying={player.isPlaying}
					/>
				)}
			</>
		</div>
	)
}
