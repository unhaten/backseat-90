'use client'

import {
	Button,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	ScrollArea,
	ScrollBar,
	Separator
} from '@/components/ui'
import { DialogClose, DialogFooter } from '@/components/ui/dialog'
import { Settings as SettingsIcon } from 'lucide-react'
import {
	IconLinks,
	LanguageChange,
	LogOut,
	NameChange,
	// ResetPassword,
	ThemeColor
} from './components'
import { useState } from 'react'

export const Settings = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Button
					className='absolute top-2 right-2 rounded-full'
					variant={'outline'}
					size='icon'
				>
					<SettingsIcon />
				</Button>
			</DialogTrigger>
			<DialogContent
			//  onPointerDownOutside={e => e.preventDefault()}
			>
				<DialogHeader>
					<DialogTitle className='text-center text-2xl font-bebasNeue'>
						Settings
					</DialogTitle>
					<DialogDescription className='text-center text-xs'>
						Customize your settings and take a look at another
						options
					</DialogDescription>
				</DialogHeader>
				<Separator className='' />
				<ScrollArea className='px-4 max-h-72'>
					<ThemeColor />
					<LanguageChange />
					<NameChange />
					{/* <ResetPassword /> */}
					<ScrollBar />
				</ScrollArea>
				<DialogFooter
					className='-mt-3'
					style={{
						justifyContent: 'space-between',
						flexDirection: 'row'
					}}
				>
					<DialogClose asChild>
						<Button className='w-fit' variant='outline'>
							Save changes
						</Button>
					</DialogClose>
					<div className='flex items-center gap-2'>
						<IconLinks />
						<LogOut setIsOpen={setIsOpen} />
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
