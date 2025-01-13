import { Button } from '@/components/ui/button'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export const SignUpForm = ({}) => {
	return (
		<>
			<CardHeader>
				<CardTitle className='text-2xl text-center'>Sign up</CardTitle>
			</CardHeader>
			<CardContent>
				<form>
					<div className='flex flex-col gap-6'>
						<div className='grid gap-2'>
							<Label htmlFor='email'>Email</Label>
							<Input
								id='email'
								type='email'
								placeholder='m@example.com'
								required
							/>
						</div>
						<div className='grid gap-2'>
							<div className='flex items-center'>
								<Label htmlFor='password'>Password</Label>
							</div>
							<Input id='password' type='password' required />
						</div>
						<div className='grid gap-2'>
							<div className='flex items-center'>
								<Label htmlFor='repeat-password'>
									Repeat password
								</Label>
							</div>
							<Input
								id='repeat-password'
								type='password'
								required
							/>
						</div>
						<Button type='submit' className='w-full'>
							Sign up
						</Button>
					</div>
					<div className='mt-4 text-center text-sm'>
						Already have an account?{' '}
						<Link
							href='./signin'
							className='underline underline-offset-4'
						>
							Log in
						</Link>
					</div>
				</form>
			</CardContent>
		</>
	)
}
