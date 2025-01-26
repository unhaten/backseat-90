'use client'

import { Button } from '@/components/ui'
import { useQueryClient } from '@tanstack/react-query'
import { ImagePlay } from 'lucide-react'

export const ChangeImage = () => {
	// TODO: make an animation between image changes
	const queryClient = useQueryClient()

	const handleClick = () => {
		queryClient.invalidateQueries({
			queryKey: ['image-generator']
		})
	}

	return (
		<Button
			className='absolute top-2 left-2 rounded-full p-1.5 cursor-pointer'
			variant={'outline'}
			size='icon'
			asChild
			onClick={handleClick}
		>
			<ImagePlay />
		</Button>
	)
}
