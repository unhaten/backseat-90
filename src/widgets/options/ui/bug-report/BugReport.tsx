import { HeaderText } from '@/components'
import {
	Button,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input
} from '@/components/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { Bug } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

export const BugReport = () => {
	const t = useTranslations('HomePage')

	const formSchema = z.object({
		message: z
			.string()
			.min(1, {
				message: t('cant-send-empty-message')
			})
			.trim()
	})

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			message: ''
		}
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		toast.info(JSON.stringify(values))
	}

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
					<DialogTitle className='text-center'>
						<HeaderText text={t('report-a-bug')} />
					</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<FormField
							control={form.control}
							name='message'
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t('message')}</FormLabel>
									<FormControl>
										<Input
											placeholder={t('enter-message')}
											{...field}
										/>
									</FormControl>
									<FormDescription>
										{t('tell-us-message')}
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type='submit' className='mt-3 min-w-full'>
							{t('send')}
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
