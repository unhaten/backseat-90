import { SettingsContainer } from '@/components'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui'

export const LanguageChange = () => {
	const language = 'en'
	return (
		<SettingsContainer>
			<div className='col-span-3'>
				<h3 className='text-lg font-rockSalt text-rose-500'>
					Language
				</h3>
				<p className='text-xs text-muted-foreground'>
					Change the language of the app for your convenience and
					familiarity
				</p>
			</div>
			<Select>
				<SelectTrigger className='w-20'>
					<SelectValue
						defaultValue={language}
						placeholder={language}
					/>
				</SelectTrigger>
				<SelectContent className=''>
					<SelectItem value='ru'>ru</SelectItem>
					<SelectItem value='en'>en</SelectItem>
					<SelectItem value='de'>de</SelectItem>
				</SelectContent>
			</Select>
		</SettingsContainer>
	)
}
