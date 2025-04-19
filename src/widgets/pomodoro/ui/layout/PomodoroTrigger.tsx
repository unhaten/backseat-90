import { Button, DialogTrigger } from '@/components/ui'
import { Timer } from 'lucide-react'

export const PomodoroTrigger = () => {
	return (
		<DialogTrigger asChild>
			<Button
				asChild
				className='rounded-full p-1.5 cursor-pointer'
				variant={'outline'}
				size='icon'
			>
				<Timer />
			</Button>
		</DialogTrigger>
	)
}
