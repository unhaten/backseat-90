'use client'

import { useAppSelector } from '@/lib/hooks/redux'
import { useEffect, useRef, useState } from 'react'
import {
	Controls,
	LikeButton,
	SongDuration,
	SongImage,
	SongInfo
} from './components'

export const Player = () => {
	const ref = useRef<HTMLAudioElement>(null)
	const player = useAppSelector(state => state.player)

	const [isLiked, setIsLiked] = useState(false)

	useEffect(() => {
		if (!ref.current) return

		if (player.isPlaying) {
			ref.current.play()
		} else {
			ref.current.pause()
		}
	}, [ref, player.isPlaying])

	return (
		<div>
			<audio ref={ref} src='/hiphopproject-rare.mp3' />
			<div className='flex items-center gap-4'>
				<SongImage />
				<div className='w-full'>
					<div className='flex justify-between items-center gap-2'>
						<SongInfo />
						<LikeButton isLiked={isLiked} setIsLiked={setIsLiked} />
					</div>
					<SongDuration />
				</div>
			</div>
			<Controls isPlaying={player.isPlaying} />
		</div>
	)
}
