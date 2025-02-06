import { SettingsContainer, SettingsDescription } from '@/components'
import { Button } from '@/components/ui'

export function ResetPassword() {
	return (
		<SettingsContainer>
			<SettingsDescription
				settingName='Reset password'
				settingDescription='Reset your current password if you do not like your previous one'
			/>
			<div className='col-span-2 sm:col-span-1'>
				<Button className='py-6 text-xs whitespace-break-spaces'>
					Reset password
				</Button>
			</div>
		</SettingsContainer>
	)
}
