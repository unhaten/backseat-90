'use client'

import { useAppSelector } from '@/lib/hooks/redux'
import { Line } from './ui/line'
import { Needle } from './ui/needle'
import { Record } from './ui/record'
import s from './vinyl.module.css'

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
			<Needle mainColor={radio.mainColor} isPlaying={radio.isPlaying} />
		</div>
	)
}
