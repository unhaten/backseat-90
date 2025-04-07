import { useTranslations } from 'next-intl'
import { useEffect } from 'react'
import { toast } from 'sonner'

export const useConnectionWarning = (isError: boolean) => {
	const t = useTranslations('HomePage')

	useEffect(() => {
		if (isError) {
			toast.warning(t('cant-connect'))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isError])
}
