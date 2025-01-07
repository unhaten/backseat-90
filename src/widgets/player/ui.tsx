'use client'

import { useAppSelector } from '@/lib/hooks/redux'
import { useEffect, useRef } from 'react'
import { Controls } from './components'
import Image from 'next/image'

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
			<div>
				<div className='flex align-center gap-4'>
					<div className='relative w-24 h-24'>
						<Image
							src='/song-placeholder.png'
							fill
							alt='song placeholder'
						/>
					</div>
					<h3>Now playing:</h3>
					<h4>Song name</h4>
				</div>
			</div>
			<Controls />
		</div>
	)
}
