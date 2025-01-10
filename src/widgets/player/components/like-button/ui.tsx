import { Button } from '@/components/ui'
import { Heart } from 'lucide-react'

type Props = {
	isLiked: boolean
	setIsLiked: (isLiked: boolean) => void
}

export const LikeButton = ({ isLiked, setIsLiked }: Props) => {
	return (
		<Button
			className=''
			size='icon'
			variant={'ghost'}
			aria-label='Like'
			onClick={() => setIsLiked(!isLiked)}
		>
			<Heart
				className={`${
					isLiked ? 'fill-rose-500' : 'fill-primary'
				} transition-colors`}
			/>
		</Button>
	)
}
