import { Line } from './components/line'
import { Needle } from './components/needle'
import { NeedleConstruction } from './components/needle-construction'
import { NeedleContainer } from './components/needle-container'
import { Record } from './components/record'
import s from './vinyl.module.css'

import { IPlayer } from '@/widgets/player'

type Props = { player: IPlayer }
export const Vinyl = ({ player }: Props) => {
	return (
		<div className={s.recordContainer}>
			<Record
				mainColor={player.mainColor}
				secondaryColor={player.secondaryColor}
				isPlaying={player.isPlaying}
			/>
			<Line mainColor={player.mainColor} isPlaying={player.isPlaying} />

			{/* TODO: //? lol this div container moves my vinyl so it is out of container randomly sry guys if you see this thing im a little dumb but it works and gives more atmosphere lol again! */}
			<div>spacing</div>

			<NeedleContainer
				isPlaying={player.isPlaying}
				mainColor={player.mainColor}
			/>
			<NeedleConstruction
				secondaryColor={player.secondaryColor}
				isPlaying={player.isPlaying}
			/>
			<Needle mainColor={player.mainColor} isPlaying={player.isPlaying} />
		</div>
	)
}
