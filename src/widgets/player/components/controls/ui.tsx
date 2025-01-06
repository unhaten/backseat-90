import { Button } from '@/components/ui'
import { useAppDispatch } from '@/lib/hooks/redux'
import { togglePlayer } from '@/widgets/player'
import { Heart, Play } from 'lucide-react'

export const Controls = () => {
	const dispatch = useAppDispatch()

	const handleToggle = () => {
		dispatch(togglePlayer())
	}

	return (
		<div className='flex items-center gap-2'>
			<Button
				size='icon'
				aria-label='Toggle Radio'
				onClick={handleToggle}
			>
				<Play strokeWidth={'3px'} />
			</Button>
			<Button className='border-primary hover:bg-rose-400' size='icon' variant={'secondary'} aria-label='Like'>
				<Heart strokeWidth={'3px'} />
			</Button>
		</div>
	)
}
