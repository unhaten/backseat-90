'use client'

import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux'
import { toggleRadio } from '@/widgets/radio'
import { useEffect, useRef } from 'react'

export const Player = () => {
	const ref = useRef<HTMLAudioElement>(null)
	const radio = useAppSelector(state => state.radio)
	const dispatch = useAppDispatch()

	const handleToggle = () => {
		dispatch(toggleRadio())
	}

	useEffect(() => {
		if (!ref.current) return

		if (radio.isPlaying) {
			ref.current.play()
		} else {
			ref.current.pause()
		}
	}, [ref, radio.isPlaying])

	return (
		<div>
			<audio ref={ref} controls src='/hiphopproject-rare.mp3' />
			<button className='bg-blue-300 p-2' onClick={handleToggle}>
				radio {radio.isPlaying ? 'on' : 'off'}
			</button>
		</div>
	)
}
