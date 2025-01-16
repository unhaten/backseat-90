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
		console.log(values)
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
						href='./signup'
						className='underline underline-offset-4'
					>
						Sign up
					</Link>
				</div>
			</CardContent>
		</>
	)
}
