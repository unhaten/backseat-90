'use client'

import { useAppSelector } from '@/lib/hooks/redux'
import { useEffect, useRef, useState } from 'react'
import { Controls } from './components'
import { Song } from '@/entities/song'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { connectToRadio } from '@/api/server-actions'
import { PlayerLoader } from '@/components'
import { toast } from 'sonner'
// import { API_PUBLIC_URL } from '@/lib/config'

export const Player = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['player'],
		queryFn: connectToRadio
	})

	const audioRef = useRef<HTMLAudioElement>(null)
	const player = useAppSelector(state => state.player)
	const queryClient = useQueryClient()

	const [currentTime, setCurrentTime] = useState(0)

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

	useEffect(() => {
		if (!audioRef.current) return

		if (player.isPlaying) {
			audioRef.current.play()
		} else {
			audioRef.current.pause()
		}
	}, [audioRef, player.isPlaying])

	useEffect(() => {
		if (!audioRef.current) return

		audioRef.current.volume = player.volume / 100
	}, [player.volume])

	useEffect(() => {
		if (!audioRef.current) return
		audioRef.current.load() //* forcing because mobile browsers does not preload music smh
		// handleLoad()
	}, [audioRef])

	useEffect(() => {
		const interval = setInterval(() => {
			if (!audioRef.current) return
			setCurrentTime(audioRef.current.currentTime)
		}, 500)

		return () => clearInterval(interval)
	}, [])

	useEffect(() => {
		if (!audioRef.current) return
		audioRef.current.onerror = () => {
			console.warn('Stream error, retrying...')
			toast.warning('Stream Disconnected', {
				description: 'Trying to reconnect...'
			})
			queryClient.invalidateQueries({ queryKey: ['player'] })
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

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
							src={data?.success ? data.value.url : undefined}
						/>
						<Song
							currentSong={data?.success && data.value.song}
							currentTime={currentTime}
						/>
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
