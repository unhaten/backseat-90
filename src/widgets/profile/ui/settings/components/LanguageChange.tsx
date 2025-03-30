'use client'

import { SettingsContainer, SettingsDescription } from '@/components'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export const LanguageChange = () => {
	const t = useTranslations('HomePage')
	const router = useRouter()

	const [language, setLanguage] = useState('')

	useEffect(() => {
		// Get the language code from the current path
		const currentLanguage = window.location.pathname.split('/')[1] || 'en'
		setLanguage(currentLanguage)
	}, [])

	const handleLanguageChange = (newLanguage: string) => {
		setLanguage(newLanguage)

		const path = window.location.pathname.replace(/^\/(en|ru|de)/, '')

		router.push(`/${newLanguage}${path}`)
	}

	return (
		<SettingsContainer>
			<SettingsDescription
				settingName={t('language')}
				settingDescription={t('language-description')}
			/>
			<div className='col-span-2 sm:col-span-1'>
				<Select value={language} onValueChange={handleLanguageChange}>
					<SelectTrigger className='w-20 ml-auto mr-[1px]'>
						<SelectValue placeholder={language} />
					</SelectTrigger>
					<SelectContent className=''>
						<SelectItem value='ru'>RU</SelectItem>
						<SelectItem value='en'>EN</SelectItem>
						<SelectItem value='de'>DE</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</SettingsContainer>
	)
}
