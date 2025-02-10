import { IconLinkButton } from '@/components'
import { Coffee, Github, Send } from 'lucide-react'

export const IconLinks = () => {
	return (
		<ul className='flex gap-2 items-center'>
			<IconLinkButton href='https://t.me/unhaten' icon={<Send />} />
			<IconLinkButton
				href='https://github.com/unhaten'
				icon={<Github />}
			/>
			<IconLinkButton href='#' icon={<Coffee />} />
		</ul>
	)
}
