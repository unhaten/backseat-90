import { checkIfSongIsLiked, addToBookmarks } from '@/api/actions'
import { Button } from '@/components/ui'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Heart } from 'lucide-react'
import { useEffect } from 'react'
import { toast } from 'sonner'
import { setLike, toggleLike } from '@/entities/song/model/song.slice'
import { useTranslations } from 'next-intl'

type Props = {
	songId: string | null
}

export const LikeButton = ({ songId }: Props) => {
	const t = useTranslations('HomePage')

	const queryClient = useQueryClient()
	const dispatch = useAppDispatch()

	const isLiked = useAppSelector(state => state.song.isLiked)
	const isAuth = useAppSelector(state => state.user.isAuth)

	const {
		isPending,
		isError,
		refetch,
		isFetched,
		isRefetching,
		data: isSongLiked
	} = useQuery({
		queryKey: ['is-liked'],
		queryFn: () => checkIfSongIsLiked(songId),
		retry: false,
		enabled: false
	})

	const mutation = useMutation({
		mutationKey: ['is-liked', 'bookmarks'],
		mutationFn: (songId: string) => addToBookmarks(songId),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['bookmarks']
			})
			queryClient.refetchQueries({
				queryKey: ['bookmarks']
			})
		}
	})

	useEffect(() => {
		if (!songId) return
		refetch()
	}, [songId])

	useEffect(() => {
		if (isRefetching) {
			dispatch(setLike(false))
		}
	}, [isRefetching])

	useEffect(() => {
		if (!isRefetching) {
			dispatch(setLike(isSongLiked))
		}
	}, [isSongLiked, isRefetching])

	const handleClick = async () => {
		if (!songId) return
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
		if (!isAuth) {
			dispatch(setLike(false))
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuth])

	return (
		<Button
			className='shrink-0'
			size='icon'
			variant={'ghost'}
			aria-label='Like'
			onClick={handleClick}
			disabled={
				isPending ||
				isError ||
				mutation.isPending ||
				!isAuth ||
				isRefetching
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
