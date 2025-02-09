import { changePassword } from '@/api/actions'
import { SettingsContainer, SettingsDescription } from '@/components'
import { PasswordFormFieldWithSideInput } from '@/components/password-form-field-with-side-input'
import {
	Button,
	Form,
	Sheet,
	SheetClose,
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
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

export function ChangePassword() {
	const mutation = useMutation({
		mutationKey: ['profile'],
		mutationFn: (values: z.infer<typeof formSchema>) => {
			return changePassword(values)
		},
		onSuccess: async data => {
			toast.info(data.message)
		},
		onError: error => {
			toast.warning('Error while changing name', {
				description: error.message
			})
		}
	})

	const formSchema = z
		.object({
			currentPassword: z.string().min(1, {
				message: 'This field should not be empty'
			}),
			newPassword: z
				.string()
				.min(6, {
					message: 'Password must be at least 6 characters'
				})
				.refine(password => /[A-Z]/.test(password), {
					message:
						'Password must contain at least one uppercase letter'
				})
				.refine(password => /[a-z]/.test(password), {
					message:
						'Password must contain at least one lowercase letter'
				})
				.refine(password => /[0-9]/.test(password), {
					message: 'Password must contain at least one digit'
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
				message: 'Passwords must not match',
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

	const [isOpen, setIsOpen] = useState(false)

	return (
		<SettingsContainer>
			<SettingsDescription
				settingName='Change password'
				settingDescription='Change your current password if you do not like your previous one'
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
							Edit <KeyRound />
						</Button>
					</SheetTrigger>
					<SheetContent side='left'>
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)}>
								<SheetHeader>
									<SheetTitle>
										Change your password
									</SheetTitle>
									<SheetDescription>
										Make changes to your current password
										here. Click save when you are done.
									</SheetDescription>
								</SheetHeader>
								<PasswordFormFieldWithSideInput
									name='currentPassword'
									label='Current password'
								/>
								<PasswordFormFieldWithSideInput
									name='newPassword'
									label='New password'
								/>
								<SheetFooter className='mt-1'>
									<SheetClose asChild>
										<Button type='submit'>
											Change password
										</Button>
									</SheetClose>
								</SheetFooter>
							</form>
						</Form>
					</SheetContent>
				</Sheet>
			</div>
		</SettingsContainer>
	)
}
