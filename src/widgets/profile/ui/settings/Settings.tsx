'use client'

import {
	Dialog,
	DialogContent,
	ScrollArea,
	ScrollBar,
	Separator
} from '@/components/ui'
import { useState } from 'react'
import { ThemeColor } from './ui/theme-color/ThemeColor'
import { LanguageChange } from './ui/language-change/LanguageChange'
import { ChangePassword } from './ui/change-password/ChangePassword'
import { NameChange } from './ui/name-change/NameChange'
import { SettingsFooter } from './ui/SettingsFooter'
import { SettingsHeader } from './ui/SettingsHeader'
import { SettingsTrigger } from './ui/SettingsTrigger'

const COMPONENTS = [ThemeColor, LanguageChange, NameChange, ChangePassword]

export const Settings = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<SettingsTrigger />
			<DialogContent
			// FIXME: //! when clicking on phone outside of dialog with select-language it closes dialog, not select
			//  onPointerDownOutside={e => e.preventDefault()}
			>
				<SettingsHeader />
				<Separator />
				<ScrollArea className='px-4 max-h-72'>
					{COMPONENTS.map((Component, index) => (
						<Component key={index} />
					))}
					<ScrollBar />
				</ScrollArea>
				<SettingsFooter setIsOpen={setIsOpen} />
			</DialogContent>
		</Dialog>
	)
}
