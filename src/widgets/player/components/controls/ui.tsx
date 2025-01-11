import { PlayButton, SoundButton } from './components'

type Props = {
	isPlaying: boolean
}
export const Controls = ({ isPlaying }: Props) => {
	return (
		<div className='flex justify-between items-center'>
			<SoundButton />
			<PlayButton isPlaying={isPlaying} />
			<div className='basis-2/5' />
		</div>
	)
}
