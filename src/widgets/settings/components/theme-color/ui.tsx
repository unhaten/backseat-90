'use client'
import { SettingsContainer } from '@/components'
import { RadioGroup, RadioGroupItem, Label } from '@/components/ui'
import { useTheme } from 'next-themes'

export const ThemeColor = () => {
	const { theme, setTheme } = useTheme()

	const handleThemeChange = (value: string) => {
		setTheme(value)
	}
	return (
		<SettingsContainer>
			<div className='col-span-3'>
				<h3 className='text-md sm:text-lg font-rockSalt text-rose-500 mb-1'>
					Color theme
				</h3>
				<p className='text-xs text-muted-foreground'>
					Change the color theme of the app between dark, light and
					system mode
				</p>
			</div>
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
		</SettingsContainer>
	)
}
