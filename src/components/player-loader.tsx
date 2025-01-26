import { Heart } from 'lucide-react'
import { SongPlaceholder } from './song-placeholder'
import { Button, Progress, Skeleton } from './ui'

export const PlayerLoader = () => {
	return (
		<div className='flex items-center gap-4 mb-4'>
			<Skeleton className='z-0'>
				<SongPlaceholder />
			</Skeleton>
			<div className='w-full'>
				<div className='flex justify-between items-center gap-2'>
					<div className='w-full'>
						<Skeleton className='h-6 md:h-7 w-full bg-gray-300/60' />
						<Skeleton className='h-4 md:h-5 mt-2 w-full bg-gray-300/60' />
					</div>
					<Button
						className='shrink-0'
						size='icon'
						variant={'ghost'}
						disabled
					>
						<Heart className={`fill-primary dark:stroke-black`} />
					</Button>
				</div>
				<div className='mt-2'>
					<Progress value={0} className='h-0.5' />
					<div className='flex justify-between text-sm mt-1 font-light'>
						<span>00:00</span>
						<span>00:00</span>
					</div>
				</div>
			</div>
		</div>
	)
}
