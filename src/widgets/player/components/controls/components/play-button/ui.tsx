import { Button } from '@/components/ui'
import { Pause, Play } from 'lucide-react'
import { useAppDispatch } from '@/lib/hooks/redux'
import { togglePlayer } from '@/widgets/player'

type Props = {
	isPlaying: boolean
	isDataLoading: boolean
}
export const PlayButton = ({ isPlaying, isDataLoading }: Props) => {
	const dispatch = useAppDispatch()

	const handleToggle = () => {
		dispatch(togglePlayer())
	}

	return (
		<Button
			size='icon'
			className='shrink-0 mx-auto'
			aria-label='Toggle Radio'
			onClick={handleToggle}
			disabled={isDataLoading}
		>
			{isPlaying ? <Pause /> : <Play />}
		</Button>
	)
}
