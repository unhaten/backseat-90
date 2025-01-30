import { getProfile } from '@/api/actions'
import { Button } from '@/components/ui'
import { useQuery } from '@tanstack/react-query'
import { Heart } from 'lucide-react'
import { toast } from 'sonner'

type Props = {
	isLiked: boolean
	setIsLiked: (isLiked: boolean) => void
}

export const LikeButton = ({ isLiked, setIsLiked }: Props) => {
	const { data } = useQuery({
		queryKey: ['profile'],
		queryFn: getProfile
	})

	const handleClick = () => {
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
			disabled={!data?.success}
		>
			<Heart
				className={`${
					isLiked ? 'fill-rose-500' : 'fill-primary'
				} transition-colors dark:stroke-black`}
			/>
		</Button>
	)
}
