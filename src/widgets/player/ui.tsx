'use client'

import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Controls } from './components'
import { setDuration } from './model/player.slice'
import { Song } from '@/entities/song'
import { useQuery } from '@tanstack/react-query'
import { connectToRadio } from '@/api/server-actions'
import { PlayerLoader } from '@/components'
import { toast } from 'sonner'
import { API_PUBLIC_URL } from '@/lib/config'

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

	const handleLoad = useCallback(() => {
		if (!audioRef.current) return
		const seconds = audioRef.current?.duration
		if (seconds) dispatch(setDuration(seconds))
	}, [dispatch])

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
				{data?.success && (
					<>
						<audio
							ref={audioRef}
							src={
								API_PUBLIC_URL +
								(data?.success && data.value.file)
							}
							preload='auto'
							onLoadedMetadata={handleLoad}
						/>
						<Song
							currentTrack={data?.success && data.value}
							currentTime={currentTime}
							duration={player.duration}
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
