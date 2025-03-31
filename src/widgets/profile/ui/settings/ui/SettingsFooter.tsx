import { Button, DialogClose, DialogFooter } from '@/components/ui'
import { IconLinks } from './IconLinks'
import { LogoutButton } from './LogoutButton'
import { Dispatch, SetStateAction } from 'react'
import { useTranslations } from 'next-intl'

type Props = {
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const SettingsFooter = ({ setIsOpen }: Props) => {
	const t = useTranslations('HomePage')

	return (
		<DialogFooter
			className='mt-0.5'
			style={{
				justifyContent: 'space-between',
				flexDirection: 'row'
			}}
		>
			<DialogClose asChild>
				<Button className='w-fit' variant='outline'>
					{t('save-changes')}
				</Button>
			</DialogClose>
			<div className='flex items-center gap-2'>
				<IconLinks />
				<LogoutButton setIsOpen={setIsOpen} />
			</div>
		</DialogFooter>
	)
}
