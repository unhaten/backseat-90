import { SettingsContainer, SettingsDescription } from '@/components'
import { useProfileNoRetry } from '@/lib/hooks/react-query'
import { NameChangeDialog } from './components/name-change-dialog'
import { useTranslations } from 'next-intl'

export const NameChange = () => {
	const t = useTranslations('HomePage')

	const { data } = useProfileNoRetry()

	return (
		<SettingsContainer>
			<SettingsDescription
				settingName={t('nickname')}
				settingDescription={t('nickname-description')}
			/>
			<div className='col-span-2 sm:col-span-1 text-center'>
				{/* <p className='font-semibold text-xs'>{data?.name || 'User'}</p> */}
				<NameChangeDialog name={data?.name || 'User'} />
			</div>
		</SettingsContainer>
	)
}
