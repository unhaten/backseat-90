'use client'

import { Button } from '@/components/ui'
import { useIsFetching, useQueryClient } from '@tanstack/react-query'
import { ImagePlay } from 'lucide-react'

export const ChangeImage = () => {
	// TODO: make an animation between image changes
	const queryClient = useQueryClient()
	const isFetching = useIsFetching({ queryKey: ['image-generator'] }) > 0

	const handleClick = () => {
		new Audio('/noise.mp3').play()
		queryClient.invalidateQueries({
			queryKey: ['image-generator']
		})
	}

	return (
		<Button
			className='absolute top-2 left-2 rounded-full p-1.5 cursor-pointer'
			variant={'outline'}
			size='icon'
			onClick={handleClick}
			disabled={isFetching}
		>
			<ImagePlay />
		</Button>
	)
}
