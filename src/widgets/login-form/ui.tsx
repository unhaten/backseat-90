import { Button } from '@/components/ui/button'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export const LoginForm = ({}) => {
	return (
		<>
			<CardHeader>
				<CardTitle className='text-2xl text-center'>Log in</CardTitle>
			</CardHeader>
			<CardContent>
				<form>
					<div className='flex flex-col gap-6'>
						<div className='grid gap-2'>
							<Label htmlFor='email'>Email</Label>
							<Input
								id='email'
								type='email'
								// placeholder='m@example.com'
								required
							/>
						</div>
						<div className='grid gap-2'>
							<div className='flex items-center'>
								<Label htmlFor='password'>Password</Label>
								<a
									href='#'
									className='ml-auto inline-block text-sm underline-offset-4 hover:underline'
								>
									Forgot your password?
								</a>
							</div>
							<Input id='password' type='password' required />
						</div>
						<Button type='submit' className='w-full'>
							Log in
						</Button>
						{/* <Button variant='outline' className='w-full'>
								Login with Google
							</Button> */}
					</div>
					<div className='mt-4 text-center text-sm'>
						Don&apos;t have an account?{' '}
						<Link
							href='./signup'
							className='underline underline-offset-4'
						>
							Sign up
						</Link>
					</div>
				</form>
			</CardContent>
		</>
	)
}
