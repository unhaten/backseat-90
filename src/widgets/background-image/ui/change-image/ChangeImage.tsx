import { Button } from '@/components/ui'
import { useIsFetching, useQueryClient } from '@tanstack/react-query'
import { ImagePlay } from 'lucide-react'

export const ChangeImage = () => {
	const queryClient = useQueryClient()

	//* this sets isFetching to true so we can play loading animation
	const isFetching = useIsFetching({ queryKey: ['image-generator'] }) > 0

	const handleClick = () => {
		new Audio('/noise.mp3').play()
		queryClient.invalidateQueries({
			queryKey: ['image-generator']
		})
	}

	return (
		<Button
			className='rounded-full p-1.5 cursor-pointer'
			variant={'outline'}
			size='icon'
			onClick={handleClick}
			disabled={isFetching}
		>
			<ImagePlay />
		</Button>
	)
}
