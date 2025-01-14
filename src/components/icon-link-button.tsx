import Link from 'next/link'
import { Button } from './ui'

type Props = {
	icon: React.ReactNode
	href: string
}

export const IconLinkButton = ({ icon, href }: Props) => {
	return (
		<li>
			<Button
				size='icon'
				className='border-secondary border-2 hover:bg-slate-700/10 dark:hover:bg-slate-50/10'
				variant={'link'}
				asChild
			>
				<Link
					className='text-secondary'
					href={href}
					target='_blank'
					rel='noopener noreferrer'
				>
					{icon}
				</Link>
			</Button>
		</li>
	)
}
