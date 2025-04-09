import { Button } from '@/components/ui'
import { Newspaper } from 'lucide-react'
import Link from 'next/link'

export const NewsFeed = () => {
	return (
		<Button
			asChild
			className='rounded-full p-1.5 cursor-pointer'
			variant={'outline'}
			size='icon'
		>
			<Link href='#'>
				<Newspaper />
			</Link>
		</Button>
	)
}
