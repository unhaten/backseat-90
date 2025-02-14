import { LikeButton, SongDuration, SongImage, SongInfo } from './components'
import { ISong } from './types/type'

type Props = {
	currentTrack: ISong
	currentTime: number
	duration: number
}

export const Song = ({ currentTrack, currentTime, duration }: Props) => {
	return (
		<div className='flex items-center gap-4 mb-4'>
			<SongImage thumbnail={currentTrack.thumbnail} />
			<div className='w-full'>
				<div className='flex justify-between items-center gap-2'>
					<SongInfo
						title={currentTrack.title}
						author={currentTrack.author}
					/>
					<LikeButton songId={currentTrack.id} />
				</div>
				<SongDuration duration={duration} currentTime={currentTime} />
			</div>
		</div>
	)
}
