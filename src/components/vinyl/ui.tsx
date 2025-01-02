'use client'

import { useAppSelector } from '@/lib/hooks/redux'
import { Label } from './ui/label'
import { Line } from './ui/line'
import { Needle } from './ui/needle'
import { Record } from './ui/record'
import s from './vinyl.module.css'

type Props = object
export const Vinyl = ({}: Props) => {
	const radio = useAppSelector(state => state.radio)

	return (
		<div className={s.recordContainer}>
			<Record color={radio.color} isPlaying={radio.isPlaying} />
			<Label color={radio.color} isPlaying={radio.isPlaying}/>
			<Line color={radio.color} isPlaying={radio.isPlaying}/>
			<Needle color={radio.color} isPlaying={radio.isPlaying}/>
		</div>
	)
}
