import { Button } from '@/components/ui'
import { User } from 'lucide-react'
import Link from 'next/link'

export const LogButton = () => {
	const currentPath = window.location.pathname
	const pathParts = currentPath.split('/')
	const currentLanguage = pathParts[1] || 'en'

	return (
		<Button
			className='absolute top-2 right-2 rounded-full'
			variant={'outline'}
			size='icon'
			asChild
		>
			<Link href={`/${currentLanguage}/auth/login`}>
				<User />
			</Link>
		</Button>
	)
}
