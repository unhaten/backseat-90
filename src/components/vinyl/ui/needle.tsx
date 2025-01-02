import { motion } from 'motion/react'
import s from '../vinyl.module.css'

type Props = { mainColor: string; isPlaying: boolean }
export const Needle = ({ mainColor, isPlaying }: Props) => {
	const mainColorWithOpacity = mainColor + '4d'

	const motionProps = isPlaying
		? {
				animate: { rotateZ: 3 },
				transition: {
					repeat: Infinity,
					repeatType: 'reverse' as const,
					duration: 1.5,
					repeatDelay: 0.5
				}
		  }
		: {}

	return (
		<motion.div
			{...motionProps}
			className={s.needle}
			initial={{ rotateZ: -3 }}
			style={{
				boxShadow: `0px 2px 10px 2px ${mainColorWithOpacity}`
			}}
		/>
	)
}
