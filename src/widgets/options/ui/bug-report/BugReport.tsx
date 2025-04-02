import {
	Button,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input
} from '@/components/ui'
import { Bug } from 'lucide-react'
import { useForm } from 'react-hook-form'

export const BugReport = () => {
	const form = useForm()

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					asChild
					className='rounded-full p-1.5 cursor-pointer'
					variant={'outline'}
					size='icon'
				>
					<Bug />
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
				<FormField
					control={form.control}
					name='message'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Input
									placeholder='Enter your message here'
									{...field}
								/>
							</FormControl>
							<FormDescription>
								Tell us about bug you found or something else
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
			</DialogContent>
		</Dialog>
	)
}
