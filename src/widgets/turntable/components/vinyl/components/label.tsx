import { motion } from 'motion/react'
import s from '../vinyl.module.css'
import { useMediaQuery } from '@siberiacancode/reactuse'

type Props = { color: string; isPlaying: boolean }
export const Label = ({ color, isPlaying }: Props) => {
	const isMobile = useMediaQuery('(max-width: 640px)')

	const motionProps = isPlaying
		? {
				animate: { scale: 1.1 },
				transition: {
					repeat: Infinity,
					repeatType: 'reverse' as const,
					duration: 1.5
				}
		  }
		: {
				
		  }

	return (
		<motion.div
			{...motionProps}
			className={s.label}
			style={
				isMobile
					? {
							boxShadow: `0 0 0 4px ${color}, inset 0 0 0 11px ${color}`,
							border: `solid 1.25px #d9a388`
					  }
					: {
							boxShadow: `0 0 0 4px ${color}, inset 0 0 0 27px ${color}`,
							border: `solid 1.25px #d9a388`
					  }
			}
			initial={{ scale: 1 }}
		/>
	)
}
