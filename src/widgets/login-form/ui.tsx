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
import { FormField } from '@/components'
import { toast } from 'sonner'

export const LoginForm = ({}) => {
	const formSchema = z.object({
		email: z
			.string()
			.min(1, {
				message: 'Enter your email'
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
		try {
			const response = await fetch(
				// FIXME: wrong endpoint
				'http://localhost:3000/api/auth/login',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(values)
				}
			)
			if (!response.ok) {
				toast.info('Something went wrong', {
					description: response.statusText
				})
			}
			const data = await response.json()
			console.log(data)
			// toast.info(data.error, {
			// 	description: data.message
			// })
		} catch (err) {
			toast.error('Something went wrong', {
				description: `${err}`
			})
		}
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
						<FormField<z.infer<typeof formSchema>>
							name='password'
							label='Password'
							type='password'
						/>
						<Button className='w-full mt-6' type='submit'>
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
