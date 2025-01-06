'use client'

import { useAppSelector } from '@/lib/hooks/redux'
import { useEffect, useRef } from 'react'
import { Controls } from './components'

export const Player = () => {
	const ref = useRef<HTMLAudioElement>(null)
	const player = useAppSelector(state => state.player)

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
			<Controls />
		</div>
	)
}
