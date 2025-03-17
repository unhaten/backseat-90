import { ISong } from './model/types'
import { LikeButton } from './ui/like-button'
import { SongDuration } from './ui/song-duration'
import { SongImage } from './ui/song-image'
import { SongInfo } from './ui/song-info'

type Props = {
	currentSong: ISong
}

export const Song = ({ currentSong }: Props) => {
	return (
		<div className='flex items-center gap-4 mb-4'>
			<SongImage thumbnail={currentSong.thumbnail} />
			<div className='w-full'>
				<div className='flex justify-between items-center gap-2'>
					<SongInfo
						title={currentSong.title}
						author={currentSong.author}
					/>
					<LikeButton songId={currentSong.id} />
				</div>
				<SongDuration
					duration={currentSong.duration}
					playedAt={currentSong.playedAt}
				/>
			</div>
		</div>
	)
}
