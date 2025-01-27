import { z } from 'zod'

export const formSchema = z
	.object({
		email: z
			.string()
			.min(1, {
				message: 'Email is required'
			})
			.email(),
		password: z
			.string()
			.min(6, {
				message: 'Password must be at least 6 characters'
			})
			.refine(password => /[A-Z]/.test(password), {
				message: 'Password must contain at least one uppercase letter'
			})
			.refine(password => /[a-z]/.test(password), {
				message: 'Password must contain at least one lowercase letter'
			})
			.refine(password => /[0-9]/.test(password), {
				message: 'Password must contain at least one digit'
			})
			.refine(password => /[!@#$%^&*]/.test(password), {
				message: 'Password must contain at least one special character'
			}),
		confirmPassword: z.string().min(1, {
			message: 'This field should not be empty'
		})
	})
	.refine(
		values => {
			return values.password === values.confirmPassword
		},
		{
			message: 'Passwords must match',
			path: ['confirmPassword']
		}
	)
