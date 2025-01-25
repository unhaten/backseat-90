import { Button } from '@/components/ui'
import { User } from 'lucide-react'
import Link from 'next/link'

export const LogButton = () => {
	return (
		<Button
			className='absolute top-2 right-2 rounded-full'
			variant={'outline'}
			size='icon'
			asChild
		>
			<Link href='/auth/login'>
				<User />
			</Link>
		</Button>
	)
}
