'use client'

import { useAppSelector } from '@/lib/hooks/redux'
import s from './vinyl.module.css'
import { Record, Line, Needle, NeedleConstruction } from './ui/index'

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
			<NeedleConstruction />
			<Needle mainColor={radio.mainColor} isPlaying={radio.isPlaying} />
		</div>
	)
}
