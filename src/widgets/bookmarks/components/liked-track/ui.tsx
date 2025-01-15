import { SongImage, SongInfo } from '@/widgets/player/components'
import { Heart } from 'lucide-react'
import { DeleteButton } from '../delete-button/ui'

type Props = {
	thumbnail: string
	title: string
	author: string
	likes: number
	id: number
}

export const LikedTrack = ({ thumbnail, title, author, likes, id }: Props) => {
	return (
		<li className='relative flex items-center gap-4 p-4 border-2 border-primary rounded-lg'>
			<div className='w-16'>
				<SongImage thumbnail={thumbnail} />
			</div>
			<div>
				<SongInfo title={title} author={author} />
			</div>
			<DeleteButton
				title={title}
				author={author}
				thumbnail={thumbnail}
				id={id}
			/>
			<div className='absolute bottom-1 right-1 flex items-center'>
				<p className='text-sm font-bebasNeue'>{likes}</p>
				<Heart className='p-1 stroke-rose-500' />
			</div>
		</li>
	)
}
