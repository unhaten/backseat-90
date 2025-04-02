import { HeaderText } from '@/components'
import { DialogDescription, DialogHeader, DialogTitle } from '@/components/ui'
import { useTranslations } from 'next-intl'

export const SettingsHeader = () => {
	const t = useTranslations('HomePage')

	return (
		<DialogHeader>
			<DialogTitle className='text-center text-2xl font-bebasNeue'>
				<HeaderText text={t('settings')} />
			</DialogTitle>
			<DialogDescription className='text-center text-xs'>
				{t('setting-description')}
			</DialogDescription>
		</DialogHeader>
	)
}
