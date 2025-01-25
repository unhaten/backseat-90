import { Button } from '@/components/ui'
import { ImagePlay } from 'lucide-react'

export const ChangeImage = () => {
	return (
		<Button
			className='absolute top-2 left-2 rounded-full p-1.5 cursor-pointer'
			variant={'outline'}
			size='icon'
			asChild
		>
			<ImagePlay />
		</Button>
	)
}
