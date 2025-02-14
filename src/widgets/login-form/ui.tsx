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

export const LoginForm = ({}) => {
	const router = useRouter()
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationFn: (values: z.infer<typeof formSchema>) => {
			return login(values)
		},
		onSuccess: data => {
			queryClient.setQueryData(['profile'], data)
			queryClient.refetchQueries({
				queryKey: ['is-liked']
			})
			toast.info(`Welcome, ${data.name ? data.name : 'user'}!`)
			router.push('/')
		},
		onError: error => {
			toast.warning('Login failed', {
				description: error.message
			})
		}
	})

	const formSchema = z.object({
		email: z
			.string()
			.min(1, {
				message: 'Enter is required'
			})
			.email(),
		password: z.string().min(1, {
			message: 'Enter your password'
		})
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
				<CardTitle className='text-2xl text-center'>Log in</CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<FormField<z.infer<typeof formSchema>>
							name='email'
							placeholder='m@example.com'
							label='Email'
							type='email'
						/>
						<PasswordFormField<z.infer<typeof formSchema>>
							name='password'
							label='Password'
						/>
						<Button
							className='w-full mt-6'
							type='submit'
							disabled={mutation.isPending}
						>
							Log In
						</Button>
					</form>
				</Form>
				<div className='mt-4 text-center text-sm'>
					Don&apos;t have an account?{' '}
					<Link
						href='./register'
						className='underline underline-offset-4'
					>
						Sign up
					</Link>
				</div>
			</CardContent>
		</>
	)
}
