'use client'

import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux'
import { useCallback, useEffect, useRef, useState } from 'react'
import {
	Controls,
	LikeButton,
	SongDuration,
	SongImage,
	SongInfo
} from './components'
import { tracks } from '@/lib/dummies/data'
import { setDuration } from './model/player.slice'

export const Player = () => {
	const audioRef = useRef<HTMLAudioElement>(null)
	const player = useAppSelector(state => state.player)
	const dispatch = useAppDispatch()

	const [currentTrack] = useState(tracks[1])
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
			<audio
				ref={audioRef}
				src={currentTrack.src}
				preload='metadata'
				onLoadedMetadata={handleLoad}
			/>
			<div className='flex items-center gap-4'>
				<SongImage thumbnail={currentTrack.thumbnail} />
				<div className='w-full'>
					<div className='flex justify-between items-center gap-2'>
						<SongInfo
							title={currentTrack.title}
							author={currentTrack.author}
						/>
						<LikeButton isLiked={isLiked} setIsLiked={setIsLiked} />
					</div>
					<SongDuration
						duration={player.duration}
						currentTime={currentTime}
					/>
				</div>
			</div>
			<Controls isPlaying={player.isPlaying} />
		</div>
	)
}
