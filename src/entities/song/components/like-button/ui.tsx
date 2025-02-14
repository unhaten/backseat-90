import { toggleLike } from '@/api/actions'
import { Button } from '@/components/ui'
import { useIfSongIsLikedNoRetry } from '@/lib/hooks/react-query'
import { useMutation } from '@tanstack/react-query'
import { Heart } from 'lucide-react'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

type Props = {
	songId: number
}

export const LikeButton = ({ songId }: Props) => {
	const { isSuccess, data } = useIfSongIsLikedNoRetry(songId)
	const [isLiked, setIsLiked] = useState(false)

	const mutation = useMutation({
		mutationKey: ['is-liked'],
		mutationFn: (songId: number) => toggleLike(songId),
		onSuccess: () => {}
	})

	const handleClick = async () => {
		setIsLiked((prev: boolean) => !prev)

		await mutation.mutate(songId)
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

	return (
		<Button
			className='shrink-0'
			size='icon'
			variant={'ghost'}
			aria-label='Like'
			onClick={handleClick}
			disabled={!isSuccess}
		>
			<Heart
				className={`${
					isLiked ? 'fill-rose-500' : 'fill-primary'
				} dark:stroke-black`}
			/>
		</Button>
	)
}
