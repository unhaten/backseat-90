import { HeaderText } from '@/components'
import { DialogHeader, DialogTitle } from '@/components/ui'
import { useBugReportAmount } from '@/lib/hooks/react-query'
import { useTranslations } from 'next-intl'

export const BugReportHeader = () => {
	const t = useTranslations('HomePage')

	const { data } = useBugReportAmount()

	return (
		<DialogHeader>
			<DialogTitle className='text-center'>
				<HeaderText text={t('report-a-bug')} />
				<p>
					{t('bug-report-left')}: {data}
				</p>
			</DialogTitle>
		</DialogHeader>
	)
}
