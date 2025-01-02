import { motion } from 'motion/react'
import s from '../vinyl.module.css'

type Props = { color: string; isPlaying: boolean }
export const Line = ({ color, isPlaying }: Props) => {
	const motionProps = isPlaying
		? {
				animate: { rotate: 360 },
				transition: {
					repeat: Infinity,
					repeatType: 'reverse' as const,
					duration: 20
				}
		  }
		: {}
	return (
		<motion.div
			{...motionProps}
			className={s.line}
			style={{
				boxShadow: `0 0px 30px 1.5px ${color}`
			}}
		/>
	)
}
