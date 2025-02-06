import { SettingsContainer, SettingsDescription } from '@/components'
import {
	Button,
	Input,
	Label,
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui'
import { KeyRound } from 'lucide-react'

export function ChangePassword() {
	return (
		<SettingsContainer>
			<SettingsDescription
				settingName='Change password'
				settingDescription='Change your current password if you do not like your previous one'
			/>
			<div className='col-span-2 sm:col-span-1'>
				<Sheet>
					<SheetTrigger asChild>
						<Button className=''>
							Edit <KeyRound />
						</Button>
					</SheetTrigger>
					<SheetContent side='left'>
						<SheetHeader>
							<SheetTitle>Change your password</SheetTitle>
							<SheetDescription>
								Make changes to your current password here.
								Click save when you are done.
							</SheetDescription>
						</SheetHeader>
						<div className='grid gap-4 py-4'>
							<div className='grid grid-cols-4 items-center gap-4'>
								<Label
									htmlFor='current-password'
									className='text-center'
								>
									Current password
								</Label>
								<Input
									id='current-password'
									type='password'
									className='col-span-3'
								/>
							</div>
							<div className='grid grid-cols-4 items-center gap-4'>
								<Label
									htmlFor='new-password'
									className='text-center'
								>
									New password
								</Label>
								<Input
									id='new-password'
									type='password'
									className='col-span-3'
								/>
							</div>
						</div>
						<SheetFooter>
							<SheetClose asChild>
								<Button type='submit'>Change password</Button>
							</SheetClose>
						</SheetFooter>
					</SheetContent>
				</Sheet>
			</div>
		</SettingsContainer>
	)
}
