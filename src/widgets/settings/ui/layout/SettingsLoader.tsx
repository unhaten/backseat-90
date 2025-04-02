import { Button } from '@/components/ui'
import { Hourglass } from 'lucide-react'

export const SettingsLoader = () => {
	return (
		<Button
			className='absolute top-2 right-2 rounded-full animate-spin hover:bg-background cursor-default'
			variant={'outline'}
			size='icon'
		>
			<Hourglass className='stroke-foreground' />
		</Button>
	)
}
