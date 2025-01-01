import { motion } from 'motion/react'
import s from '../vinyl.module.css'

type Props = { color: string }
export const Line = ({ color }: Props) => {
	return (
		<motion.div
			className={s.line}
			style={{
				boxShadow: `0 0px 30px 1.5px ${color}`
			}}
			animate={{
				rotate: 360
			}}
			transition={{
				repeat: Infinity,
				repeatType: 'reverse',
				duration: 20
			}}
		/>
	)
}
