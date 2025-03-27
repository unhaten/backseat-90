import { useTranslations } from 'next-intl'
import { z } from 'zod'

export const useFormSchema = () => {
	const t = useTranslations('Register')

	return z
		.object({
			email: z
				.string()
				.min(1, {
					message: t('email-required')
				})
				.email()
				.trim(),
			password: z
				.string()
				.min(6, {
					message: t('six-characters')
				})
				.trim()
				.refine(password => /[A-Z]/.test(password), {
					message: t('uppercase')
				})
				.refine(password => /[a-z]/.test(password), {
					message: t('lowercase')
				})
				.refine(password => /[0-9]/.test(password), {
					message: t('digit')
				}),
			// .refine(password => /[!@#$%^&*]/.test(password), {
			// 	message: 'Password must contain at least one special character'
			// })
			confirmPassword: z
				.string()
				.min(1, {
					message: t('not-empty')
				})
				.trim()
		})
		.refine(
			values => {
				return values.password === values.confirmPassword
			},
			{
				message: t('must-match'),
				path: ['confirmPassword']
			}
		)
}
