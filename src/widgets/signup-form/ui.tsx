'use client'

import Link from 'next/link'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
	FormMessage,
	Input,
	CardContent,
	CardHeader,
	CardTitle,
	Button
} from '@/components/ui'

export const SignUpForm = ({}) => {
	const formSchema = z.object({
		email: z.string().min(2, {
			message: 'Username must be at least 2 characters.'
		}),
		password: z.string().min(2, {
			message: 'Password must be at least 2 characters.'
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
	const onSubmit = (values: z.infer<typeof formSchema>) => {
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
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel htmlFor='email'>Email</FormLabel>
									<FormControl>
										<Input
											placeholder='m@example.com'
											// id='email'
											// type='email'
											// required
											{...field}
										/>
									</FormControl>
									<FormDescription>
										Enter your email
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='password'
							render={({ field }) => (
								<FormItem>
									<FormLabel htmlFor='password'>
										Password
									</FormLabel>
									<FormControl>
										<Input
											placeholder='m@example.com'
											// id='password'
											// type='password'
											// required
											{...field}
										/>
									</FormControl>
									<FormDescription>
										Enter your email
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button className='w-full mt-4' type='submit'>
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
