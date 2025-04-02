import { changePassword } from '@/api/actions'
import { SettingsContainer, SettingsDescription } from '@/components'
import { PasswordFormFieldWithSideInput } from '@/components/password-form-field-with-side-input'
import {
	Button,
	Form,
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { KeyRound } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

export function PasswordChange() {
	const t = useTranslations('HomePage')

	const mutation = useMutation({
		mutationKey: ['profile'],
		mutationFn: (values: z.infer<typeof formSchema>) => {
			return changePassword(values)
		},
		onSuccess: async () => {
			form.reset()
			toast.info(t('change-password-success'))
		},
		onError: error => {
			toast.warning(t('change-password-error'), {
				description: error.message
			})
		}
	})

	const formSchema = z
		.object({
			currentPassword: z.string().min(1, {
				message: t('not-empty-field')
			}),
			newPassword: z
				.string()
				.min(6, {
					message: t('six-characters')
				})
				.refine(password => /[A-Z]/.test(password), {
					message: t('uppercase')
				})
				.refine(password => /[a-z]/.test(password), {
					message: t('lowercase')
				})
				.refine(password => /[0-9]/.test(password), {
					message: t('digit')
				})
			// .refine(password => /[!@#$%^&*]/.test(password), {
			// 	message: 'Password must contain at least one special character'
			// })
		})
		.refine(
			values => {
				return values.currentPassword !== values.newPassword
			},
			{
				message: t('must-not-match'),
				path: ['newPassword']
			}
		)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			currentPassword: '',
			newPassword: ''
		}
	})

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		await mutation.mutateAsync(values)
	}

	return (
		<SettingsContainer>
			<SettingsDescription
				settingName={t('change-password')}
				settingDescription={t('change-password-description')}
			/>
			<div className='col-span-2 sm:col-span-1'>
				<Sheet
				// open={isOpen}
				>
					<SheetTrigger asChild>
						<Button
							className=''
							// onClick={() => setIsOpen(prev => !prev)}
						>
							{t('edit')} <KeyRound />
						</Button>
					</SheetTrigger>
					<SheetContent side='left'>
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)}>
								<SheetHeader>
									<SheetTitle>
										{t('change-your-password')}
									</SheetTitle>
									<SheetDescription>
										{t('change-your-password-description')}
									</SheetDescription>
								</SheetHeader>
								<PasswordFormFieldWithSideInput
									name='currentPassword'
									label={t('current-password')}
								/>
								<PasswordFormFieldWithSideInput
									name='newPassword'
									label={t('new-password')}
								/>
								<SheetFooter className='mt-3'>
									<Button
										type='submit'
										disabled={mutation.isPending}
									>
										{t('change-password-lowercase')}
									</Button>
								</SheetFooter>
							</form>
						</Form>
					</SheetContent>
				</Sheet>
			</div>
		</SettingsContainer>
	)
}
