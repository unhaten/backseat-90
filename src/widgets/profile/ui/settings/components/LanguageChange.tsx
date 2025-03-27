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

	// <select onChange={(e) =>
	//       router.push(
	//         {
	//           pathname: router.pathname,
	//           query: router.query,
	//         },
	//         null,
	//         { locale: e.target.value }
	//       )
	//     }
	//   >

	useEffect(() => {
		// Get the language code from the current path
		const currentLanguage = window.location.pathname.split('/')[1] || 'en'
		setLanguage(currentLanguage)
	}, [])

	const handleLanguageChange = (newLanguage: string) => {
		setLanguage(newLanguage)

		// Check if router.asPath is defined and has a pathname
		const path = window.location.pathname ? window.location.pathname : '/'

		// Check if current path includes the language and remove it
		const newPath = path.startsWith(`/${newLanguage}`)
			? path
			: `/${newLanguage}${path.substring(3)}` // Replace the language part

		// Redirect to the new language path
		router.push(newPath)
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
