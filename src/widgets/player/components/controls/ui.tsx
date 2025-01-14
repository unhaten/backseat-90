import { Bookmarks } from '@/widgets/bookmarks'
import { PlayButton, SoundButton } from './components'

type Props = {
	isPlaying: boolean
}
export const Controls = ({ isPlaying }: Props) => {
	return (
		<div className='grid grid-cols-3'>
			<SoundButton />
			<PlayButton isPlaying={isPlaying} />
			<Bookmarks />
		</div>
	)
}
