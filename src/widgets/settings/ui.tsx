import {
	Button,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui'
import { Settings as SettingsIcon } from 'lucide-react'

export const Settings = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					className='absolute top-2 right-2 rounded-full'
					variant={'outline'}
					size='icon'
				>
					<SettingsIcon />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently
						delete your account and remove your data from our
						servers.
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}
