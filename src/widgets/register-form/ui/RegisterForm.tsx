'use client'

import Link from 'next/link'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
	Form,
	CardContent,
	CardHeader,
	CardTitle,
	Button
} from '@/components/ui'
import { FormField, PasswordFormField } from '@/components'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { register } from '@/api/actions'
import { useFormSchema } from '../lib/schema'
import { useTranslations } from 'next-intl'

export const RegisterForm = ({}) => {
	const t = useTranslations('Register')
	const errorT = useTranslations('errors')

	const router = useRouter()

	const formSchema = useFormSchema()
	const mutation = useMutation({
		mutationFn: (values: z.infer<typeof formSchema>) => {
			return register(values)
		},
		onSuccess: () => {
			toast.info(t('registration-success'), {
				description: t('registration-success-description')
			})
			router.push('/auth/login')
		},
		onError: error => {
			const key = error instanceof Error ? error.message : 'unknown-error'
			toast.warning(t('registration-error'), {
				description: errorT(key)
			})
		}
	})
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: ''
		}
	})

	// 2. Define a submit handler.
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		await mutation.mutateAsync(values)
	}

	return (
		<>
			<CardHeader>
				<CardTitle className='text-2xl text-center'>
					{t('sign-up')}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<FormField<z.infer<typeof formSchema>>
							name='email'
							placeholder='m@example.com'
							label={t('email')}
							description={t('email-description')}
							type='email'
						/>
						<PasswordFormField<z.infer<typeof formSchema>>
							name='password'
							label={t('password')}
							description={t('password-description')}
						/>
						<PasswordFormField<z.infer<typeof formSchema>>
							name='confirmPassword'
							label={t('repeat')}
							description={t('repeat-description')}
						/>
						<Button
							className='w-full mt-6'
							type='submit'
							disabled={mutation.isPending}
						>
							{t('sign-up')}
						</Button>
					</form>
				</Form>
				<div className='mt-4 text-center text-sm'>
					{t('have-account')}
					<Link
						href='./login'
						className='underline underline-offset-4'
					>
						{' '}
						{t('login')}
					</Link>
				</div>
			</CardContent>
		</>
	)
}
