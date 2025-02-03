import { getProfile } from '@/api/actions'
import { SettingsContainer, SettingsDescription } from '@/components'
import { Button } from '@/components/ui'
import { useQuery } from '@tanstack/react-query'

export const NameChange = () => {
	const { data } = useQuery({
		queryKey: ['profile'],
		queryFn: getProfile
	})

	console.log(data)

	return (
		<SettingsContainer>
			<SettingsDescription
				settingName='Nickname'
				settingDescription='Enter your name to share your liked songs with other users (it is not necessary)'
			/>
			<div className='col-span-2 sm:col-span-1 text-center'>
				<p className='font-semibold text-xs'>
					{data?.success && data?.value.name}
				</p>
				<Button className='w-full h-6 mt-1' variant='secondary'>
					Edit
				</Button>
			</div>
		</SettingsContainer>
	)
}
