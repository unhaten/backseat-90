import { Bookmarks } from '@/widgets/bookmarks'
import { PlayButton, SoundButton } from './components'

export const Controls = () => {
	return (
		<div className='grid grid-cols-3'>
			<SoundButton />
			<PlayButton />
			<Bookmarks />
		</div>
	)
}
