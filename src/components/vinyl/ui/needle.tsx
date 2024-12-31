import { motion } from 'motion/react'
import s from '../vinyl.module.css'

type Props = { color: string }
export const Needle = ({ color }: Props) => {
	return (
		<motion.div
			className={s.needle}
			initial={{ rotateZ: -4 }}
			animate={{
				rotateZ: 4
			}}
			transition={{
				repeat: Infinity,
				repeatType: 'reverse',
				duration: 1.5,
				repeatDelay: 0.5
			}}
			style={{
				boxShadow: `0px 2px 8px 1px ${color}`
			}}
		/>
	)
}
