import { HeaderText } from '@/components'
import {
	Button,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Slider
} from '@/components/ui'
import { ScanEye } from 'lucide-react'

export const Focus = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					asChild
					className='rounded-full p-1.5 cursor-pointer'
					variant={'outline'}
					size='icon'
				>
					<ScanEye />
				</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle className='text-center'>
						<HeaderText text='Focus Mode' />
					</DialogTitle>
				</DialogHeader>
				<Slider defaultValue={[0]} max={100} step={1} className={''} />
			</DialogContent>
		</Dialog>
	)
}
