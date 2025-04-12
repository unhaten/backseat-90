import { HeaderText } from '@/components'
import {
	Button,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui'
import { Timer } from 'lucide-react'

export const Pomodoro = () => {
	return (
		<Dialog>
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
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle className='text-center'>
						<HeaderText text='Pomodoro' />
					</DialogTitle>
				</DialogHeader>
				<div className=''>test</div>
				{/* <DialogFooter>
					<Button type='submit'>Save changes</Button>
				</DialogFooter> */}
			</DialogContent>
		</Dialog>
	)
}
