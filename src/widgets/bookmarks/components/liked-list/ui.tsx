import { LikedTrack } from '../liked-track/ui'

export const LikedList = () => {
	return (
		<ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 py-2'>
			{[1, 2, 3, 4, 5].map(i => (
				<LikedTrack key={i} />
			))}
		</ul>
	)
}
