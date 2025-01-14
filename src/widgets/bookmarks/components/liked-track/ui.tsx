import { Button } from '@/components/ui'
import { SongImage, SongInfo } from '@/widgets/player/components'
import { Heart, Trash2 } from 'lucide-react'

type Props = {
	thumbnail: string
	title: string
	author: string
	likes: number
}

export const LikedTrack = ({ thumbnail, title, author, likes }: Props) => {
	return (
		<li className='relative flex items-center gap-4 p-4 border-2 border-primary rounded-lg'>
			<div className='w-16'>
				<SongImage thumbnail={thumbnail} />
			</div>
			<div>
				<SongInfo title={title} author={author} />
			</div>
			<Button
				size='icon'
				variant='destructive'
				className='absolute top-1 right-1 w-6 h-6 rounded-full'
			>
				<Trash2 className='p-1' />
			</Button>
			<div className='absolute bottom-1 right-1 flex items-center'>
				<p className='text-sm font-bebasNeue'>{likes}</p>
				<Heart className='p-1 stroke-rose-500' />
			</div>
		</li>
	)
}
