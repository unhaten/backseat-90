import { likedData } from '@/lib/dummies/liked-data'
import { LikedTrack } from '../liked-track/ui'

export const LikedList = () => {
	return (
		<ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 py-2'>
			{likedData.map(item => (
				<LikedTrack
					key={item.id}
					thumbnail={item.thumbnail}
					title={item.title}
					author={item.author}
					likes={item.likes}
					id={item.id}
				/>
			))}
		</ul>
	)
}
