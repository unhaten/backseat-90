import { ServerActionResult } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import { useEffect } from 'react'
import { toast } from 'sonner'
import { StationData } from '..'

export const useConnectionWarning = (
	data?: ServerActionResult<StationData>
) => {
	const t = useTranslations('HomePage')

	useEffect(() => {
		if (!data?.success) {
			toast.warning(t('cant-connect'))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data?.success])
}
