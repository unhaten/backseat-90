import { Button } from '@/components/ui'
import { Bug } from 'lucide-react'

export const BugReport = () => {
	return (
		<Button
			asChild
			className='rounded-full p-1.5 cursor-pointer'
			variant={'outline'}
			size='icon'
		>
			<Bug />
		</Button>
	)
}
