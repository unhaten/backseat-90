import { Progress } from '@/components/ui'
import { formatTime } from '../../lib/format-time'
import { useSongTimer } from '../../model/useSongTimer'

type Props = {
	duration: number
	playedAt: number
}
export const SongDuration = ({ duration, playedAt }: Props) => {
	const now = useSongTimer()

	const elapsed = Math.floor(now / 1000 - playedAt)
	const clampedElapsed = Math.min(Math.max(elapsed, 0), duration) //? prevent negative or overflow
	const progress = (clampedElapsed / duration) * 100

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
