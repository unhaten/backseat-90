'use client'

import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux'
import { togglePlayer } from '@/widgets/player'
import { useEffect, useRef } from 'react'

export const Player = () => {
	const ref = useRef<HTMLAudioElement>(null)
	const player = useAppSelector(state => state.player)
	const dispatch = useAppDispatch()

	const handleToggle = () => {
		dispatch(togglePlayer())
	}

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
			<audio ref={ref} controls src='/hiphopproject-rare.mp3' />
			<button className='bg-blue-300 p-2' onClick={handleToggle}>
				player {player.isPlaying ? 'on' : 'off'}
			</button>
		</div>
	)
}
