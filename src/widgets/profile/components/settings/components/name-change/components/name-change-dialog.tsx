import { changeName } from '@/api/actions'
import {
	Avatar,
	AvatarFallback,
	Form,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Button,
	Input,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
	FormField
} from '@/components/ui'
import { formatName } from '@/widgets/profile/model/profile.helpers'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

type Props = {
	name: string
}

export const NameChangeDialog = ({ name }: Props) => {
	const t = useTranslations('HomePage')

	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationKey: ['profile'],
		mutationFn: (values: z.infer<typeof formSchema>) => {
			return changeName(values)
		},
		onSuccess: async data => {
			await queryClient.invalidateQueries({
				queryKey: ['profile']
			})
			toast.info(`${t('edit-name-success')}, ${data.name}!`)
		},
		onError: error => {
			toast.warning(t('edit-name-error'), {
				description: error.message
			})
		}
	})

	const formattedName = formatName(name)

	const formSchema = z.object({
		username: z
			.string()
			.min(1, {
				message: t('required-field')
			})
			.max(20, {
				message: t('nickname-length')
			})
	})

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: name
		}
	})

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		await mutation.mutateAsync(values)
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Avatar className='cursor-pointer size-12'>
					<AvatarFallback className='text-sm bg-secondary font-medium hover:bg-secondary/80 transition-colors'>
						{formattedName}
					</AvatarFallback>
				</Avatar>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<DialogHeader>
							<DialogTitle>{t('edit-name')}</DialogTitle>
							<DialogDescription>
								{t('edit-name-description')}
							</DialogDescription>
						</DialogHeader>
						<FormField
							control={form.control}
							name='username'
							render={({ field }) => (
								<FormItem className='mt-9 mb-5'>
									<div className='grid items-center grid-cols-4 gap-4'>
										<FormLabel
											htmlFor='username'
											className='text-center'
										>
											{t('nickname')}
										</FormLabel>
										<FormControl>
											<Input
												className='col-span-3'
												id='username'
												type='text'
												{...field}
											/>
										</FormControl>
									</div>
									<div className='w-full h-3 pt-2 text-center'>
										<FormMessage className='' />
									</div>
								</FormItem>
							)}
						/>
						<DialogFooter>
							<Button type='submit' disabled={mutation.isPending}>
								{t('submit-name')}
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
