import { HeaderText } from '@/components'
import { DialogDescription, DialogHeader, DialogTitle } from '@/components/ui'
import { useTranslations } from 'next-intl'

export const FocusHeader = () => {
	const t = useTranslations('HomePage')

	return (
		<DialogHeader>
			<DialogTitle className='text-center'>
				<HeaderText text={t('focus-mode')} />
			</DialogTitle>
			<DialogDescription className='text-center text-xs'>
				{t('focus-description')}
			</DialogDescription>
		</DialogHeader>
	)
}
