import { motion } from 'motion/react'
import s from '../vinyl.module.css'

type Props = { color: string }
export const Record = ({ color }: Props) => {
	const colorWithOpacity = color + '4d'

	return (
		<motion.div
			initial={{ scale: 1 }}
			animate={{ rotate: 360 }}
			transition={{
				repeat: Infinity,
				repeatType: 'loop',
				duration: 3,
				ease: 'linear'
			}}
			className={s.record}
			style={{
				boxShadow: `0 15px 30px ${colorWithOpacity}`
			}}
		/>
	)
}
