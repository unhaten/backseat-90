import { motion } from 'motion/react'
import s from '../vinyl.module.css'

type Props = { mainColor: string; isPlaying: boolean }
export const Line = ({ mainColor, isPlaying }: Props) => {
	const motionProps = isPlaying
		? {
				animate: { rotate: 75, opacity: 1 },
				transition: {
					repeat: Infinity,
					repeatType: 'reverse' as const,
					duration: 10
				}
		  }
		: {}
	return (
		<motion.div
			{...motionProps}
			initial={{ rotate: 25, opacity: 0.8 }}
			className={s.line}
			style={{
				boxShadow: `0 0px 30px 1.5px ${mainColor}`
			}}
		/>
	)
}
