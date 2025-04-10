import { useTranslations } from 'next-intl'
import { z } from 'zod'

export const useBugReportSchema = () => {
	const t = useTranslations('HomePage')

	const schema = z.object({
		message: z
			.string()
			.min(1, {
				message: t('cant-send-empty-message')
			})
			.trim()
	})

	return schema
}
