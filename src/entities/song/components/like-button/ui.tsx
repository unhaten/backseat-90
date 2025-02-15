import { checkIfSongIsLiked, toggleLike } from '@/api/actions'
import { Button } from '@/components/ui'
import { useProfileNoRetry } from '@/lib/hooks/react-query'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Heart } from 'lucide-react'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

type Props = {
	songId: number
}

export const LikeButton = ({ songId }: Props) => {
	const queryClient = useQueryClient()

	const { isPending, isError, data } = useQuery({
		queryKey: ['is-liked'],
		queryFn: () => checkIfSongIsLiked(songId),
		retry: false
	})

	const { isSuccess: isAuthorized } = useProfileNoRetry()

	const [isLiked, setIsLiked] = useState(false)

	const mutation = useMutation({
		mutationKey: ['is-liked', 'bookmarks'],
		mutationFn: (songId: number) => toggleLike(songId),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['bookmarks']
			})
			queryClient.refetchQueries({
				queryKey: ['bookmarks']
			})
		}
	})

	const handleClick = async () => {
		setIsLiked(prev => !prev)
		// setIsLiked((prev: boolean) => !prev)

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
	}

	useEffect(() => {
		if (data !== undefined) {
			setIsLiked(data)
		}
	}, [data])

	useEffect(() => {
		if (!isAuthorized) {
			setIsLiked(false)
		}
	}, [isAuthorized])

	// useEffect(() => {
	// 	if (isAuthorized) {
	// 		queryClient.invalidateQueries({
	// 			queryKey: ['bookmarks', 'profile', songId]
	// 		})
	// 		queryClient.refetchQueries({
	// 			queryKey: ['bookmarks', 'profile', songId]
	// 		})
	// 	}
	// }, [isAuthorized, queryClient, songId])

	return (
		<Button
			className='shrink-0'
			size='icon'
			variant={'ghost'}
			aria-label='Like'
			onClick={handleClick}
			disabled={
				isPending || isError || mutation.isPending || !isAuthorized
			}
		>
			<Heart
				className={`${
					isLiked ? 'fill-rose-500' : 'fill-primary'
				} dark:stroke-black`}
			/>
		</Button>
	)
}
