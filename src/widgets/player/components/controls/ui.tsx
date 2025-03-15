import { Bookmarks } from '@/widgets/bookmarks'
import { PlayButton, SoundButton } from './components'

type Props = {
	isDataLoading: boolean
}
export const Controls = ({ isDataLoading }: Props) => {
	return (
		<div className='grid grid-cols-3'>
			<SoundButton isDataLoading={isDataLoading} />
			<PlayButton isDataLoading={isDataLoading} />
			<Bookmarks />
		</div>
	)
}
