'use client'

import {
	Dialog,
	DialogContent,
	ScrollArea,
	ScrollBar,
	Separator
} from '@/components/ui'
import { useState } from 'react'
import { LanguageChange } from './features/LanguageChange'
import { NameChange } from './features/name-change/NameChange'
import { SettingsHeader } from './layout/SettingsHeader'
import { SettingsTrigger } from './layout/SettingsTrigger'
import { useAuth } from '@/lib/hooks/useAuth'
import { SettingsFooter } from './layout/SettingsFooter'
import { ThemeSwitcher } from './features/ThemeSwitcher'
import { PasswordChange } from './features/PasswordChange'
import { LoginButton } from './features/LoginButton'
import { SettingsLoader } from './layout/SettingsLoader'

const COMPONENTS = [ThemeSwitcher, LanguageChange, NameChange, PasswordChange]

export const Settings = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { user, isPending } = useAuth()

	if (isPending) return <SettingsLoader />

	if (user.isAuth) {
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
	} else {
		return <LoginButton />
	}
}
