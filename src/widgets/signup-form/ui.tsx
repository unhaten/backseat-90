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
import { formSchema } from './lib/schema'

export const SignUpForm = ({}) => {
	const router = useRouter()

	const mutation = useMutation({
		mutationFn: (values: z.infer<typeof formSchema>) => {
			return register(values)
		},
		onSuccess: data => {
			if (!data.success) {
				toast.warning('Registration failed', {
					description: data.error
				})
				return
			}
			toast.info('Success!', {
				description: 'You can log in now'
			})
			router.push('/auth/login')
		},
		onError: error => {
			toast.warning('Registration failed', {
				description: (error as Error).message
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
				<CardTitle className='text-2xl text-center'>Sign up</CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<FormField<z.infer<typeof formSchema>>
							name='email'
							placeholder='m@example.com'
							label='Email'
							description='Enter your email'
							type='email'
						/>
						<PasswordFormField<z.infer<typeof formSchema>>
							name='password'
							label='Password'
							description='Enter your password'
						/>
						<PasswordFormField<z.infer<typeof formSchema>>
							name='confirmPassword'
							label='Repeat password'
							description='Repeat your password'
						/>
						<Button
							className='w-full mt-6'
							type='submit'
							disabled={mutation.isPending}
						>
							Sign Up
						</Button>
					</form>
				</Form>
				<div className='mt-4 text-center text-sm'>
					Already have an account?{' '}
					<Link
						href='./login'
						className='underline underline-offset-4'
					>
						Log in
					</Link>
				</div>
			</CardContent>
		</>
	)
}
