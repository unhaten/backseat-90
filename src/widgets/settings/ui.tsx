'use client'

import {
	Button,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Label,
	RadioGroup,
	RadioGroupItem,
	Separator
} from '@/components/ui'
import { DialogClose } from '@/components/ui/dialog'
import { Settings as SettingsIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

export const Settings = () => {
	const { theme, setTheme } = useTheme()

	const handleThemeChange = (value: string) => {
		setTheme(value)
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					className='absolute top-2 right-2 rounded-full'
					variant={'outline'}
					size='icon'
				>
					<SettingsIcon />
				</Button>
			</DialogTrigger>
			<DialogContent>
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
				<div className='px-4'>
					<div className='grid grid-cols-4 gap-2 place-items-center'>
						<div className='col-span-3'>
							<h3 className='text-lg font-rockSalt'>Color theme</h3>
							<p className='text-xs text-muted-foreground'>
								Change the color theme of the app between dark
								and light mode
							</p>
						</div>
						<RadioGroup
							defaultValue={theme}
							onValueChange={handleThemeChange}
						>
							<div className='flex items-center space-x-2'>
								<RadioGroupItem
									value='system'
									id='theme-system'
								/>
								<Label htmlFor='theme-system'>System</Label>
							</div>
							<div className='flex items-center space-x-2'>
								<RadioGroupItem
									value='light'
									id='theme-light'
								/>
								<Label htmlFor='theme-light'>Light</Label>
							</div>
							<div className='flex items-center space-x-2'>
								<RadioGroupItem value='dark' id='theme-dark' />
								<Label htmlFor='theme-dark'>Dark</Label>
							</div>
						</RadioGroup>
					</div>
				</div>
				<DialogClose asChild>
					<Button className='w-fit' variant='outline'>
						Save changes
					</Button>
				</DialogClose>
			</DialogContent>
		</Dialog>
	)
}
