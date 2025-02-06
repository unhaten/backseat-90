import { SettingsContainer, SettingsDescription } from '@/components'
import { useProfileNoRetry } from '@/lib/hooks/react-query'
import { NameChangeDialog } from './components/name-change-dialog'

export const NameChange = () => {
	const { data } = useProfileNoRetry()

	return (
		<SettingsContainer>
			<SettingsDescription
				settingName='Nickname'
				settingDescription='Enter your name to share your liked songs with other users (it is not necessary)'
			/>
			<div className='col-span-2 sm:col-span-1 text-center'>
				{/* <p className='font-semibold text-xs'>{data?.name || 'User'}</p> */}
				<NameChangeDialog name={data?.name || 'User'} />
			</div>
		</SettingsContainer>
	)
}
