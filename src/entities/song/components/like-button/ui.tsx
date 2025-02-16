import { checkIfSongIsLiked, addToBookmarks } from '@/api/actions'
import { Button } from '@/components/ui'
import { useProfileNoRetry } from '@/lib/hooks/react-query'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Heart } from 'lucide-react'
import { useEffect } from 'react'
import { toast } from 'sonner'
import { setLike, toggleLike } from '@/entities/song/model/song.slice'
import { useTranslations } from 'next-intl'

type Props = {
	songId: number
}

export const LikeButton = ({ songId }: Props) => {
	const t = useTranslations('HomePage')

	const queryClient = useQueryClient()
	const dispatch = useAppDispatch()

	const isLiked = useAppSelector(state => state.song.isLiked)

	const { isPending, isError, data } = useQuery({
		queryKey: ['is-liked'],
		queryFn: () => checkIfSongIsLiked(songId),
		retry: false
	})

	const { isSuccess: isAuthorized } = useProfileNoRetry()

	const mutation = useMutation({
		mutationKey: ['is-liked', 'bookmarks'],
		mutationFn: (songId: number) => addToBookmarks(songId),
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
		// setIsLiked(prev => !prev)
		dispatch(toggleLike())
		// setIsLiked((prev: boolean) => !prev)

		await mutation.mutateAsync(songId)
		if (!isLiked) {
			toast.success(t('like'), {
				description: t('like-description')
				// action: {
				// 	label: 'Undo',
				// 	onClick: () => setIsLiked(!isLiked)
				// }
			})
		} else {
			toast.error(t('dislike'), {
				description: t('dislike-description')
			})
		}
	}

	useEffect(() => {
		if (data !== undefined) {
			dispatch(setLike(data))
		}
	}, [data, dispatch])

	useEffect(() => {
		if (!isAuthorized) {
			dispatch(setLike(false))
		}
	}, [isAuthorized, dispatch])

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
