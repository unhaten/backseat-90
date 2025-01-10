import { PlayButton } from './components'

type Props = {
	isPlaying: boolean
}
export const Controls = ({isPlaying}: Props) => {
	return (
		<div className='flex items-center gap-2 mt-2'>
			<PlayButton isPlaying={isPlaying}/>
		</div>
	)
}
