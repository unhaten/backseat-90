'use client'

import { useAppSelector } from '@/lib/hooks/redux'
import s from './vinyl.module.css'
import {
	Record,
	Line,
	Needle,
	NeedleConstruction,
	NeedleContainer,
	Details,
	SongName
} from './ui/index'

type Props = object
export const Vinyl = ({}: Props) => {
	const radio = useAppSelector(state => state.radio)

	return (
		<div className={s.recordContainer}>
			<Record
				mainColor={radio.mainColor}
				secondaryColor={radio.secondaryColor}
				isPlaying={radio.isPlaying}
			/>
			<Line mainColor={radio.mainColor} isPlaying={radio.isPlaying} />
			{/* TODO: lol this div container moves my vinyl so it is out of container randomly sty guys if you see this thing im a little dumb but it works and gives more atmosphere lol again! */}
			<div>spacing</div>
			<NeedleContainer
				isPlaying={radio.isPlaying}
				mainColor={radio.mainColor}
			/>
			<NeedleConstruction
				secondaryColor={radio.secondaryColor}
				isPlaying={radio.isPlaying}
			/>
			<Needle mainColor={radio.mainColor} isPlaying={radio.isPlaying} />
			<SongName />
			<Details />
		</div>
	)
}
