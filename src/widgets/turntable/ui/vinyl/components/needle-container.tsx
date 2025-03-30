import { motion } from 'motion/react'
import s from '../vinyl.module.css'

type Props = {
	isPlaying: boolean
	mainColor: string
}

export const NeedleContainer = ({ isPlaying, mainColor }: Props) => {
	const colorWithOpacity = mainColor + '9a'
	return (
		<motion.div
			className={
				isPlaying
					? `${s.needleContainer} ${s.spinNeedleContainer}`
					: s.needleContainer
			}
			style={{
				boxShadow: `inset 0px 0px 0px 3px ${colorWithOpacity}`,
			}}
		/>
	)
}
