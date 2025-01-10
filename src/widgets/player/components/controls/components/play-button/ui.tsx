import { Button } from '@/components/ui'
import { Pause, Play } from 'lucide-react'
import { useAppDispatch } from '@/lib/hooks/redux'
import { togglePlayer } from '@/widgets/player'

type Props = {
	isPlaying: boolean
}
export const PlayButton = ({ isPlaying }: Props) => {
	const dispatch = useAppDispatch()

	const handleToggle = () => {
		dispatch(togglePlayer())
	}

	return (
		<Button size='icon' aria-label='Toggle Radio' onClick={handleToggle}>
			{isPlaying ? (
				<Pause strokeWidth={'2px'} />
			) : (
				<Play strokeWidth={'3px'} />
			)}
		</Button>
	)
}
