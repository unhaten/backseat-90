import { HeaderText, StylishText } from '@/components'
import { DialogHeader, DialogTitle, Skeleton } from '@/components/ui'
import { useBugReportAmount } from '@/lib/hooks/react-query'
import { useTranslations } from 'next-intl'

export const BugReportHeader = () => {
	const t = useTranslations('HomePage')

	const { data, isPending } = useBugReportAmount()

	return (
		<DialogHeader>
			<DialogTitle className='text-center'>
				<HeaderText text={t('report-a-bug')} />
				<div className='flex items-center justify-center gap-1.5 mt-2'>
					<StylishText text={`${t('bug-report-left')}:`} />
					{!isPending ? (
						data && (
							// FIXME: does not change text somehow
							<StylishText
								text={data === 0 ? t('bug-report-limit') : data}
							/>
						)
					) : (
						<Skeleton />
					)}
				</div>
			</DialogTitle>
		</DialogHeader>
	)
}
