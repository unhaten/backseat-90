import { Button } from '@/components/ui'
import { Play } from 'lucide-react'
import { useAppDispatch } from '@/lib/hooks/redux'
import { togglePlayer } from '@/widgets/player'
export const PlayButton = () => {
	const dispatch = useAppDispatch()

	const handleToggle = () => {
		dispatch(togglePlayer())
	}

	return (
		<Button size='icon' aria-label='Toggle Radio' onClick={handleToggle}>
			<Play strokeWidth={'3px'} />
		</Button>
	)
}
