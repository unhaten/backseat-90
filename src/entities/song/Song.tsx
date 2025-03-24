import { useAppSelector } from '@/lib/hooks/redux'
import { LikeButton } from './ui/LikeButton'
import { SongDuration } from './ui/SongDuration'
import { SongImage } from './ui/SongImage'
import { SongInfo } from './ui/SongInfo'

export const Song = () => {
	const song = useAppSelector(state => state.song.data)

	return (
		<div className='flex items-center gap-4 mb-4'>
			<SongImage thumbnail={song.thumbnail} />
			<div className='w-full'>
				<div className='flex justify-between items-center gap-2'>
					<SongInfo title={song.title} author={song.author} />
					<LikeButton songId={song.id} />
				</div>
				<SongDuration
					duration={song.duration}
					playedAt={song.playedAt}
				/>
			</div>
		</div>
	)
}
