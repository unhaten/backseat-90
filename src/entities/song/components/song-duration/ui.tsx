import { Progress } from '@/components/ui'
import { useEffect, useState } from 'react'

type Props = {
	duration: number
	elapsed: number
}
export const SongDuration = ({ duration, elapsed }: Props) => {
	const [time, setTime] = useState(elapsed)

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60)
		const seconds = Math.floor(time % 60)
			.toString()
			.padStart(2, '0')
		return `${minutes}:${seconds}`
	}

	// const progress = (elapsed / duration) * 100 || 0
	const progress = (time / duration) * 100 || 0

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(time => time + 1)
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	// TODO: make progress bar count how many time left for next track

	return (
		<div className='mt-2'>
			<Progress value={progress} className='h-0.5' />
			<div className='flex justify-between text-sm mt-1 font-light'>
				<span>{formatTime(time)}</span>
				<span>{formatTime(duration)}</span>
			</div>
		</div>
	)
}
