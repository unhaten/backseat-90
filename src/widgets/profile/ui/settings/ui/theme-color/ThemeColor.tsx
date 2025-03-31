'use client'
import { SettingsContainer, SettingsDescription } from '@/components'
import { RadioGroup, RadioGroupItem, Label } from '@/components/ui'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'

export const ThemeColor = () => {
	const t = useTranslations('HomePage')

	const { theme, setTheme } = useTheme()

	const handleThemeChange = (value: string) => {
		setTheme(value)
	}
	return (
		<SettingsContainer>
			<SettingsDescription
				settingName={t('color-theme')}
				settingDescription={t('color-theme-description')}
			/>
			<div className='col-span-2 sm:col-span-1'>
				<RadioGroup
					className='ml-auto'
					defaultValue={theme}
					onValueChange={handleThemeChange}
				>
					<div className='flex items-center space-x-2'>
						<RadioGroupItem value='system' id='theme-system' />
						<Label htmlFor='theme-system'>{t('system')}</Label>
					</div>
					<div className='flex items-center space-x-2'>
						<RadioGroupItem value='light' id='theme-light' />
						<Label htmlFor='theme-light'>{t('light')}</Label>
					</div>
					<div className='flex items-center space-x-2'>
						<RadioGroupItem value='dark' id='theme-dark' />
						<Label htmlFor='theme-dark'>{t('dark')}</Label>
					</div>
				</RadioGroup>
			</div>
		</SettingsContainer>
	)
}
