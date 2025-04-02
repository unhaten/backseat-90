import { Button } from '@/components/ui'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { SettingsIcon } from 'lucide-react'

export const SettingsTrigger = () => {
	return (
		<DialogTrigger asChild>
			<Button
				className='absolute top-2 right-2 rounded-full'
				variant={'outline'}
				size='icon'
			>
				<SettingsIcon />
			</Button>
		</DialogTrigger>
	)
}
