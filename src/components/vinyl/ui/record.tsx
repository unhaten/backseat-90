import { motion } from 'motion/react'
import s from '../vinyl.module.css'

type Props = { color: string; isPlaying: boolean }
export const Record = ({ color, isPlaying }: Props) => {
	const colorWithOpacity = color + '4d'

	const motionProps = isPlaying
		? {
				animate: { rotate: 360 },
				transition: {
					repeat: Infinity,
					repeatType: 'loop' as const,
					duration: 3,
					ease: 'linear'
				}
		  }
		: {
				// animate: { rotate: 0 },
				// transition: { repeat: 0, repeatType: 'loop' as const }
		  }

	return (
		<motion.div
			initial={{ scale: 1 }}
			{...motionProps}
			className={s.record}
			style={{
				boxShadow: `0 15px 30px ${colorWithOpacity}`
			}}
		/>
	)
}
