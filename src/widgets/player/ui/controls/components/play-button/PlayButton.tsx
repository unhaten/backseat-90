import { Button } from '@/components/ui'
import { AudioLines, Pause, Play } from 'lucide-react'
import { useAppSelector } from '@/lib/hooks/redux'
import { usePlaybackControls } from '@/widgets/player/lib/usePlaybackControls'

export const PlayButton = () => {
	const { isPlaying } = useAppSelector(state => state.player)
	const { togglePlayback, isFetching } = usePlaybackControls()

	return (
		<Button
			size='icon'
			className='shrink-0 mx-auto'
			aria-label={isPlaying ? 'Turn off radio' : 'Turn on radio'}
			onClick={togglePlayback}
			disabled={isFetching}
		>
			{isFetching ? (
				<AudioLines className='animate-ping' />
			) : isPlaying ? (
				<Pause />
			) : (
				<Play />
			)}
		</Button>
	)
}
