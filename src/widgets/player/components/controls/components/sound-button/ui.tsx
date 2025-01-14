'use client'

import { Button, Slider } from '@/components/ui'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux'
import { setVolume } from '@/widgets/player/model/player.slice'
import { Volume, Volume1, Volume2, VolumeX } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

type Props = object

export const SoundButton = ({}: Props) => {
	const dispatch = useAppDispatch()
	const volume = useAppSelector(state => state.player.volume)
	const [isMuted, setIsMuted] = useState(false)
	const [isClicked, setIsClicked] = useState(false)
	// const [lastVolume, setLastVolume] = useState(volume)

	const getVolumeIcon = (volume: number) => {
		if (volume < 1) return <VolumeX />
		if (volume <= 10) return <Volume />
		if (volume <= 70) return <Volume1 />
		return <Volume2 />
	}

	const volumeIcon = getVolumeIcon(volume)

	const handleSliderChange = (newVolume: number[]) => {
		if (newVolume[0] === 0 && isMuted === true) return
		if (newVolume[0] > 0 && isMuted === true) setIsMuted(false)
		dispatch(setVolume(newVolume))
	}

	// const handleMute = () => {
	// 	if (isMuted) {
	// 		dispatch(setVolume(lastVolume))
	// 	} else {
	// 		dispatch(setVolume(0))
	// 		setLastVolume(volume)
	// 	}
	// 	setIsMuted(prev => !prev)
	// }

	const handleClick = () => {
		setIsClicked(prev => !prev)
	}

	const variants = {
		initial: {
			opacity: 0,
			x: -20
		},
		animate: {
			opacity: 1,
			x: 0,
			transition: {
				type: 'spring',
				stiffness: 600,
				damping: 15,
				mass: 0.5
			}
		},
		exit: {
			opacity: 0,
			x: -20,
			transition: {
				duration: 0.1
			}
		}
	}

	return (
		<div className='flex items-center gap-2 basis-2/5'>
			<Button className='shrink-0' size='icon' onClick={handleClick}>
				{volumeIcon}
			</Button>
			<AnimatePresence>
				{isClicked && (
					<motion.div
						variants={variants}
						initial='initial'
						animate='animate'
						exit='exit'
						key='slider'
					>
						<Slider
							className='w-16 sm:w-20 cursor-grab'
							defaultValue={[volume]}
							value={[volume]}
							max={100}
							step={1}
							onValueChange={handleSliderChange}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
