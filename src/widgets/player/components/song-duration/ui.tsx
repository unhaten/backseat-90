import { Progress } from '@/components/ui'

type Props = {
	duration: number
	currentTime: number
}
export const SongDuration = ({ duration, currentTime }: Props) => {
	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60)
		const seconds = Math.floor(time % 60)
			.toString()
			.padStart(2, '0')
		return `${minutes}:${seconds}`
	}

	const progress = (currentTime / duration) * 100 || 0

	return (
		<div className='mt-2'>
			<Progress value={progress} className='h-0.5' />
			<div className='flex justify-between text-sm mt-1'>
				<span>{formatTime(currentTime)}</span>
				<span>{formatTime(duration)}</span>
			</div>
		</div>
	)
}
