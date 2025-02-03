'use client'

import { SettingsContainer, SettingsDescription } from '@/components'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui'
import { useState } from 'react'

export const LanguageChange = () => {
	const [language, setLanguage] = useState('en')
	return (
		<SettingsContainer>
			<SettingsDescription
				settingName='Language'
				settingDescription='Change the language of the app for your convenience and
					familiarity'
			/>
			<div className='col-span-2 sm:col-span-1'>
				<Select value={language} onValueChange={setLanguage}>
					<SelectTrigger className='w-20 ml-auto mr-[1px]'>
						<SelectValue placeholder={language} />
					</SelectTrigger>
					<SelectContent className=''>
						<SelectItem value='ru'>ru</SelectItem>
						<SelectItem value='en'>en</SelectItem>
						<SelectItem value='de'>de</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</SettingsContainer>
	)
}
