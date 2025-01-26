'use client'

import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Controls } from './components'
import { setDuration } from './model/player.slice'
import { Song } from '@/entities/song'
import { useQuery } from '@tanstack/react-query'
import { connectToRadio } from '@/api/actions'
import { PlayerLoader } from '@/components'

const BASE_URL = 'http://localhost:8000/public/'

export const Player = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['player'],
		queryFn: connectToRadio
	})

	const audioRef = useRef<HTMLAudioElement>(null)
	const player = useAppSelector(state => state.player)
	const dispatch = useAppDispatch()

	// const [currentTrack] = useState(data)

	const [currentTime, setCurrentTime] = useState(0)
	const [isLiked, setIsLiked] = useState(false)

	const handleLoad = useCallback(() => {
		if (!audioRef.current) return
		const seconds = audioRef.current?.duration
		if (seconds) dispatch(setDuration(seconds))
	}, [dispatch])

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
		handleLoad()
	}, [audioRef, handleLoad])

	useEffect(() => {
		const interval = setInterval(() => {
			if (!audioRef.current) return
			setCurrentTime(audioRef.current.currentTime)
		}, 500)

		return () => clearInterval(interval)
	}, [])

	return (
		<div>
			<>
				{/* h = 82px mb-4 */}
				{data && (
					<>
						<audio
							ref={audioRef}
							src={BASE_URL + data.file}
							preload='auto'
							onLoadedMetadata={handleLoad}
						/>
						<Song
							currentTrack={data}
							isLiked={isLiked}
							setIsLiked={setIsLiked}
							currentTime={currentTime}
							duration={player.duration}
						/>
					</>
				)}
				{isLoading && <PlayerLoader />}
				<Controls
					isDataLoading={isLoading}
					isPlaying={player.isPlaying}
				/>
			</>
		</div>
	)
}
