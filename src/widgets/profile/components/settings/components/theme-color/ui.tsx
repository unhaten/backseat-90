'use client'
import { SettingsContainer, SettingsDescription } from '@/components'
import { RadioGroup, RadioGroupItem, Label } from '@/components/ui'
import { useTheme } from 'next-themes'

export const ThemeColor = () => {
	const { theme, setTheme } = useTheme()

	const handleThemeChange = (value: string) => {
		setTheme(value)
	}
	return (
		<SettingsContainer>
			<SettingsDescription
				settingName='Color theme'
				settingDescription='Change the color theme of the app between dark, light and
					system mode'
			/>
			<div className='col-span-2 sm:col-span-1'>
				<RadioGroup
					className='ml-auto'
					defaultValue={theme}
					onValueChange={handleThemeChange}
				>
					<div className='flex items-center space-x-2'>
						<RadioGroupItem value='system' id='theme-system' />
						<Label htmlFor='theme-system'>System</Label>
					</div>
					<div className='flex items-center space-x-2'>
						<RadioGroupItem value='light' id='theme-light' />
						<Label htmlFor='theme-light'>Light</Label>
					</div>
					<div className='flex items-center space-x-2'>
						<RadioGroupItem value='dark' id='theme-dark' />
						<Label htmlFor='theme-dark'>Dark</Label>
					</div>
				</RadioGroup>
			</div>
		</SettingsContainer>
	)
}
