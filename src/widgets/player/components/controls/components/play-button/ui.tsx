import { Button } from '@/components/ui'
import { Pause, Play } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux'
import { togglePlayer } from '@/widgets/player'

type Props = {
	isPlaying: boolean
	isDataLoading: boolean
}
export const PlayButton = ({ isDataLoading }: Props) => {
	const dispatch = useAppDispatch()
	const { isPlaying } = useAppSelector(state => state.player)

	const handleClick = async () => {
		dispatch(togglePlayer())
	}

	return (
		<Button
			size='icon'
			className='shrink-0 mx-auto'
			aria-label={isPlaying ? 'Turn off radio' : 'Turn on radio'}
			onClick={handleClick}
			disabled={isDataLoading}
		>
			{isPlaying ? <Pause /> : <Play />}
		</Button>
	)
}
