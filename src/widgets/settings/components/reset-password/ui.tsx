import { SettingsContainer } from '@/components'

export function ResetPassword() {
	return (
		<SettingsContainer>
			<div className='col-span-3'>
				<h3 className='text-md sm:text-lg font-rockSalt text-rose-500 mb-1'>
					Reset password
				</h3>
				<p className='text-xs text-muted-foreground'>
					Reset your current password if you do not like your previous
					one
				</p>
			</div>
		</SettingsContainer>
	)
}
