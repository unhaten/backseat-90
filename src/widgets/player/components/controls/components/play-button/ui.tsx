import { Button } from '@/components/ui'
import { AudioLines, Pause, Play } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux'
import { setStreamUrl, togglePlayer } from '@/widgets/player'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { connectToRadio } from '@/api/server-actions'

type Props = {
	isDataLoading: boolean
}
export const PlayButton = ({ isDataLoading }: Props) => {
	const queryClient = useQueryClient()
	const { refetch: getStreamUrl, isFetching } = useQuery({
		queryKey: ['stream-url'],
		queryFn: connectToRadio,
		enabled: false
	})

	const dispatch = useAppDispatch()
	const { isPlaying } = useAppSelector(state => state.player)

	const handleClick = async () => {
		if (!isPlaying) {
			const { data } = await getStreamUrl()
			if (data?.success) {
				dispatch(setStreamUrl(data.value.url))
				dispatch(togglePlayer())
			}
		} else {
			dispatch(togglePlayer())
			dispatch(setStreamUrl(undefined))
			queryClient.resetQueries({ queryKey: ['stream-url'] })
		}
	}

	return (
		<Button
			size='icon'
			className='shrink-0 mx-auto'
			aria-label={isPlaying ? 'Turn off radio' : 'Turn on radio'}
			onClick={handleClick}
			disabled={isDataLoading || isFetching}
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
