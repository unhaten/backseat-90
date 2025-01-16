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

export const SignUpForm = ({}) => {
	const formSchema = z.object({
		email: z
			.string()
			.min(2, {
				message: 'Username must be at least 2 characters.'
			})
			.email(),
		password: z.string().min(6, {
			message: 'Password must be at least 6 characters.'
		}),
		repeatPassword: z.string().min(6, {
			message: 'Password must be at least 6 characters.'
		})
	})

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
			repeatPassword: ''
		}
	})

	// 2. Define a submit handler.
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		console.log(values)
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
						<FormField<z.infer<typeof formSchema>>
							name='password'
							label='Password'
							description='Enter your password'
							type='password'
						/>
						<FormField<z.infer<typeof formSchema>>
							name='repeatPassword'
							label='Repeat password'
							description='Repeat your password'
							type='password'
						/>
						<Button className='w-full mt-6' type='submit'>
							Submit
						</Button>
					</form>
				</Form>
				<div className='mt-4 text-center text-sm'>
					Already have an account?{' '}
					<Link
						href='./signin'
						className='underline underline-offset-4'
					>
						Log in
					</Link>
				</div>
			</CardContent>
		</>
	)
}
