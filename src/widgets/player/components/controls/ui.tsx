import { Bookmarks } from '@/widgets/bookmarks'
import { PlayButton, SoundButton } from './components'
import { Button } from '@/components/ui'
import { getProfile } from '@/api/actions'

type Props = {
	isPlaying: boolean
	isDataLoading: boolean
}
export const Controls = ({ isPlaying, isDataLoading }: Props) => {
	return (
		<div className='grid grid-cols-3'>
			<SoundButton isDataLoading={isDataLoading} />
			<PlayButton isPlaying={isPlaying} isDataLoading={isDataLoading} />
			<Bookmarks isDataLoading={isDataLoading} />
			<Button onClick={() => getProfile()}>click</Button>
		</div>
	)
}
