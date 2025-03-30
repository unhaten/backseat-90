import { Button } from '@/components/ui'
import { Timer } from 'lucide-react'

export const Pomodoro = () => {
	return (
		<Button
			asChild
			className='rounded-full p-1.5 cursor-pointer'
			variant={'outline'}
			size='icon'
		>
			<Timer />
		</Button>
	)
}
