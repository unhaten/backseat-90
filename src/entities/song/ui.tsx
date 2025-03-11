import { LikeButton, SongDuration, SongImage, SongInfo } from './components'
import { ISong } from './types/type'

type Props = {
	currentSong: ISong
	// duration: number
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
					elapsed={currentSong.elapsed}
				/>
			</div>
		</div>
	)
}
