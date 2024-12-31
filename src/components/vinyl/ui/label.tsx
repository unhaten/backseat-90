import { motion } from 'motion/react'
import s from '../vinyl.module.css'
import { useMediaQuery } from '@siberiacancode/reactuse'

type Props = { color: string }
export const Label = ({ color }: Props) => {
	const isMobile = useMediaQuery('(max-width: 640px)')

	return (
		<motion.div
			className={s.label}
			style={
				isMobile
					? {
							boxShadow: `0 0 0 4px ${color}, inset 0 0 0 11px ${color}`,
							border: `solid 1px #d9a388`
					  }
					: {
							boxShadow: `0 0 0 4px ${color}, inset 0 0 0 27px ${color}`,
							border: `solid 1px #d9a388`
					  }
			}
			initial={{ scale: 1 }}
			animate={{ scale: 1.1 }}
			transition={{
				repeat: Infinity,
				repeatType: 'reverse',
				duration: 1.5
			}}
		/>
	)
}
