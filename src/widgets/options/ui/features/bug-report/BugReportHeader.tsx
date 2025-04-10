import { HeaderText } from '@/components'
import { DialogHeader, DialogTitle } from '@/components/ui'
import { useTranslations } from 'next-intl'

export const BugReportHeader = () => {
	const t = useTranslations('HomePage')

	return (
		<DialogHeader>
			<DialogTitle className='text-center'>
				<HeaderText text={t('report-a-bug')} />
			</DialogTitle>
		</DialogHeader>
	)
}
