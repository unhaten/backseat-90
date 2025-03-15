import { Progress } from '@/components/ui'
import { useEffect, useState } from 'react'

type Props = {
	duration: number
	playedAt: number
}
export const SongDuration = ({ duration, playedAt }: Props) => {
	const [now, setNow] = useState(Date.now())

	useEffect(() => {
		const interval = setInterval(() => {
			setNow(Date.now())
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	const elapsed = Math.floor(now / 1000 - playedAt)
	const clampedElapsed = Math.min(Math.max(elapsed, 0), duration) //? prevent negative or overflow
	const progress = (clampedElapsed / duration) * 100

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60)
		const seconds = Math.floor(time % 60)
			.toString()
			.padStart(2, '0')
		return `${minutes}:${seconds}`
	}

	return (
		<div className='mt-2'>
			<Progress value={progress} className='h-0.5' />
			<div className='flex justify-between text-sm mt-1 font-light'>
				<span>{formatTime(clampedElapsed)}</span>
				<span>{formatTime(duration)}</span>
			</div>
		</div>
	)
}
