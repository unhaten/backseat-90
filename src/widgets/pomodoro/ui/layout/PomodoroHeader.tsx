import { HeaderText } from '@/components'
import { DialogDescription, DialogHeader, DialogTitle } from '@/components/ui'
import { useTranslations } from 'next-intl'

export const PomodoroHeader = () => {
	const t = useTranslations('HomePage')

	return (
		<DialogHeader>
			<DialogTitle className='text-center'>
				<HeaderText text={t('pomodoro')} />
			</DialogTitle>
			<DialogDescription className='text-center text-xs'>
				{t('pomodoro-description')}
			</DialogDescription>
		</DialogHeader>
	)
}
