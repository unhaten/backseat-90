import { SettingsContainer, SettingsDescription } from '@/components'
import { NameChangeDialog } from './components/name-change-dialog'
import { useTranslations } from 'next-intl'
import { useAppSelector } from '@/lib/hooks/redux'

export const NameChange = () => {
	const t = useTranslations('HomePage')
	const username = useAppSelector(state => state.user.data?.name)

	return (
		<SettingsContainer>
			<SettingsDescription
				settingName={t('nickname')}
				settingDescription={t('nickname-description')}
			/>
			<div className='col-span-2 sm:col-span-1 text-center'>
				{/* <p className='font-semibold text-xs'>{data?.name || 'User'}</p> */}
				<NameChangeDialog name={username || 'User'} />
			</div>
		</SettingsContainer>
	)
}
