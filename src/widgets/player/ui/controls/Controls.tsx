import { Bookmarks } from '@/widgets/bookmarks'
import { SoundButton } from './components/sound-button/SoundButton'
import { PlayButton } from './components/play-button/PlayButton'

export const Controls = () => {
	return (
		<div className='grid grid-cols-3'>
			<SoundButton />
			<PlayButton />
			<Bookmarks />
		</div>
	)
}
