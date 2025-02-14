import { checkIfSongIsLiked, toggleLike } from '@/api/actions'
import { Button } from '@/components/ui'
import { useProfileNoRetry } from '@/lib/hooks/react-query'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Heart } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'

type Props = {
	songId: number
}

export const LikeButton = ({ songId }: Props) => {
	const queryClient = useQueryClient()

	const { isSuccess, data } = useQuery({
		queryKey: ['liked-songs', 'profile', songId],
		queryFn: () => checkIfSongIsLiked(songId),
		retry: false
	})

	console.log(data)

	const { isSuccess: isAuthorized } = useProfileNoRetry()

	const [isLiked, setIsLiked] = useState(false)
	const [isThrottled, setIsThrottled] = useState(false)
	const throttleTimer = useRef<NodeJS.Timeout | null>(null)

	const mutation = useMutation({
		mutationKey: ['is-liked', 'liked-songs'],
		mutationFn: (songId: number) => toggleLike(songId),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['liked-songs']
			})
			queryClient.refetchQueries({
				queryKey: ['liked-songs']
			})
		}
	})

	const handleClick = async () => {
		if (isThrottled) return
		setIsLiked((prev: boolean) => !prev)
		setIsThrottled(true)

		await mutation.mutateAsync(songId)
		if (!isLiked) {
			toast.success('Like', {
				description: 'This track is added to favorites'
				// action: {
				// 	label: 'Undo',
				// 	onClick: () => setIsLiked(!isLiked)
				// }
			})
		} else {
			toast.error('Dislike', {
				description: 'This track is removed from favorites'
			})
		}

		throttleTimer.current = setTimeout(() => {
			setIsThrottled(false)
		}, 500)
	}

	useEffect(() => {
		if (data !== undefined) {
			setIsLiked(data)
		}
	}, [data])

	useEffect(() => {
		if (isAuthorized) {
			queryClient.invalidateQueries({
				queryKey: ['liked-songs', 'profile', songId]
			})
			queryClient.refetchQueries({
				queryKey: ['liked-songs', 'profile', songId]
			})
		}
	}, [isAuthorized, queryClient, songId])

	return (
		<Button
			className='shrink-0'
			size='icon'
			variant={'ghost'}
			aria-label='Like'
			onClick={handleClick}
			disabled={!isSuccess || isThrottled || !isAuthorized}
		>
			<Heart
				className={`${
					isLiked ? 'fill-rose-500' : 'fill-primary'
				} dark:stroke-black`}
			/>
		</Button>
	)
}
