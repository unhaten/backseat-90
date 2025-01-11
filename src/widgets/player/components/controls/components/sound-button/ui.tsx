import { Button, Slider } from '@/components'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux'
import { setVolume } from '@/widgets/player/model/player.slice'
import { Volume, Volume1, Volume2, VolumeX } from 'lucide-react'
import { AnimatePresence } from 'motion/react'
import { useState, useEffect } from 'react'

type Props = object

export const SoundButton = ({}: Props) => {
	const dispatch = useAppDispatch()
	const volume = useAppSelector(state => state.player.volume)
	const [isMuted, setIsMuted] = useState(false)
	const [lastVolume, setLastVolume] = useState(volume)

	const handleClick = () => {
		if (isMuted) {
			dispatch(setVolume(lastVolume))
		} else {
			setLastVolume(volume)
			dispatch(setVolume(0))
		}
		setIsMuted(prev => !prev)
	}

	const handleSliderChange = (newVolume: number[]) => {
		dispatch(setVolume(newVolume))
	}

	const getVolumeIcon = (volume: number) => {
		if (volume < 1) return <VolumeX />
		if (volume <= 25) return <Volume />
		if (volume <= 50) return <Volume1 />
		return <Volume2 />
	}

	const volumeIcon = getVolumeIcon(volume)

	useEffect(() => {
		
	}, [])

	return (
		<div className='flex items-center gap-2 basis-2/5'>
			<Button className='shrink-0' size='icon' onClick={handleClick}>
				{volumeIcon}
			</Button>
			<AnimatePresence>
				<Slider
					className='w-16'
					defaultValue={[volume]}
					max={100}
					step={1}
					onValueChange={handleSliderChange}
				/>
			</AnimatePresence>
		</div>
	)
}
