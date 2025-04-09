import { useTranslations } from 'next-intl'
import { useEffect } from 'react'
import { toast } from 'sonner'

export const useBackgroundError = (isError: boolean, message?: string) => {
	const t = useTranslations('errors')

	useEffect(() => {
		if (isError) {
			toast.warning(t('error'), {
				description: message ? t(message) : t('unknown-error')
			})
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isError])
}
