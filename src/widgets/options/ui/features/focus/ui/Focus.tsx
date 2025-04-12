import { Button } from '@/components/ui'
import { ScanEye } from 'lucide-react'

export const Focus = () => {
	return (
		<Button
			asChild
			className='rounded-full p-1.5 cursor-pointer'
			variant={'outline'}
			size='icon'
		>
			<ScanEye />
		</Button>
	)
}
