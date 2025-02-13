import { toggleLike } from '@/api/actions'
import { Button } from '@/components/ui'
import { useProfileNoRetry } from '@/lib/hooks/react-query'
import { useMutation } from '@tanstack/react-query'
import { Heart } from 'lucide-react'
import { toast } from 'sonner'

type Props = {
	isLiked: boolean
	setIsLiked: (isLiked: boolean) => void
}

export const LikeButton = ({ isLiked, setIsLiked }: Props) => {
	const { isSuccess } = useProfileNoRetry()

	const mutation = useMutation({
		mutationKey: ['profile', 'liked-songs'],
		mutationFn: (songId: number) => {
			return toggleLike(songId)
		},
		onSuccess: data => {
			console.log(data)
		}
	})

	const handleClick = () => {
		mutation.mutate(1)

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
		setIsLiked(!isLiked)
	}

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
				} transition-colors dark:stroke-black`}
			/>
		</Button>
	)
}
