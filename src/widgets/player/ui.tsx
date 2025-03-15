'use client'

import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux'
import { useEffect, useRef } from 'react'
import { Controls } from './components'
import { setSong, Song } from '@/entities/song'
import { useQuery } from '@tanstack/react-query'
import { getRadioMetadata } from '@/api/server-actions'
import { PlayerLoader } from '@/components'
import { toast } from 'sonner'
import { Button } from '@/components/ui'
// import { API_PUBLIC_URL } from '@/lib/config'

export const Player = () => {
	const {
		data,
		isLoading: isSongDataLoading,
		isError
	} = useQuery({
		queryKey: ['player'],
		queryFn: getRadioMetadata,
		refetchInterval: 3000
	})

	const audioRef = useRef<HTMLAudioElement>(null)

	const dispatch = useAppDispatch()
	const player = useAppSelector(state => state.player)
	const song = useAppSelector(state => state.song)

	useEffect(() => {
		if (data && data.success) {
			dispatch(setSong(data.value.song))
		}
	}, [data, dispatch])

	useEffect(() => {
		if (!audioRef.current) return

		const audio = audioRef.current

		if (player.url && player.isPlaying) {
			audio.src = player.url
			audio.play().catch(err => console.warn(err))
		} else {
			audio.pause()
		}
	}, [player.isPlaying, player.url])

	// const handleLoad = useCallback(() => {
	// 	if (!audioRef.current) return

	// 	audioRef.current.onloadedmetadata = () => {
	// 		dispatch(setDuration(audioRef.current?.duration || 0))
	// 	}
	// }, [])

	useEffect(() => {
		if (data && !data.success) {
			toast.warning('Error', { description: data.error })
		}
	}, [data])

	useEffect(() => {
		if (!audioRef.current) return
		audioRef.current.volume = player.volume / 100
	}, [player.volume])

	useEffect(() => {
		if (!audioRef.current) return
		audioRef.current.load() //* forcing because mobile browsers does not preload music smh
		// handleLoad()
	}, [audioRef])

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
				{isSongDataLoading && <PlayerLoader />}
				{!data?.success ? (
					isError && (
						<div className='flex items-center flex-col'>
							<p>Something went wrong</p>
							<Button>
								<span>reconnect</span>
							</Button>
						</div>
					)
				) : (
					<Controls isDataLoading={isSongDataLoading} />
				)}
			</>
		</div>
	)
}
