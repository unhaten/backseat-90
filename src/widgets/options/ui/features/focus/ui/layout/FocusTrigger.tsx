import { Button, DialogTrigger } from '@/components/ui'
import { ScanEye } from 'lucide-react'

export const FocusTrigger = () => {
	return (
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
	)
}
