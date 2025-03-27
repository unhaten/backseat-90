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
import { login } from '@/api/actions'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'

export const LoginForm = ({}) => {
	const t = useTranslations('Login')

	const router = useRouter()
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationFn: (values: z.infer<typeof formSchema>) => {
			return login(values)
		},
		onSuccess: data => {
			const currentPath = window.location.pathname
			const pathParts = currentPath.split('/')
			const currentLanguage = pathParts[1] || 'en'

			queryClient.setQueryData(['profile'], data)
			queryClient.refetchQueries({
				queryKey: ['is-liked']
			})
			queryClient.refetchQueries({
				queryKey: ['bookmarks']
			})
			toast.info(
				`${t('login-greet')}, ${
					data.name ? data.name : `${t('login-user')}`
				}!`
			)

			router.push(`/${currentLanguage}`)
		},
		onError: error => {
			toast.warning(t('login-error'), {
				description: error.message
			})
		}
	})

	const formSchema = z.object({
		email: z
			.string()
			.min(1, {
				message: t('email-required')
			})
			.email()
			.trim(),
		password: z
			.string()
			.min(1, {
				message: t('password-required')
			})
			.trim()
	})

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: ''
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
					{t('login')}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<FormField<z.infer<typeof formSchema>>
							name='email'
							placeholder='m@example.com'
							label={t('email')}
							type='email'
						/>
						<PasswordFormField<z.infer<typeof formSchema>>
							name='password'
							label={t('password')}
						/>
						<Button
							className='w-full mt-6'
							type='submit'
							disabled={mutation.isPending}
						>
							{t('login')}
						</Button>
					</form>
				</Form>
				<div className='mt-4 text-center text-sm'>
					{t('have-not-account')}
					<Link
						href='./register'
						className='underline underline-offset-4'
					>
						{' '}
						{t('sign-up')}
					</Link>
				</div>
			</CardContent>
		</>
	)
}
