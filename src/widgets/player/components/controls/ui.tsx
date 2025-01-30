import { Bookmarks } from '@/widgets/bookmarks'
import { PlayButton, SoundButton } from './components'

type Props = {
	isPlaying: boolean
	isDataLoading: boolean
}
export const Controls = ({ isPlaying, isDataLoading }: Props) => {
	return (
		<div className='grid grid-cols-3'>
			<SoundButton isDataLoading={isDataLoading} />
			<PlayButton isPlaying={isPlaying} isDataLoading={isDataLoading} />
			<Bookmarks />
		</div>
	)
}
