import { useEffect, useState } from 'react'
import s from '../vinyl.module.css'
import { motion } from 'motion/react'

type Props = {
	secondaryColor: string
	isPlaying: boolean
}

export const NeedleConstruction = ({ secondaryColor, isPlaying }: Props) => {
	const [hasLifted, setHasLifted] = useState(false)

	useEffect(() => {
		if (!isPlaying) {
			setHasLifted(false)
		}
	}, [isPlaying])

	const transitionPropsForLifting = {
		rotateZ: {
			type: 'spring',
			stiffness: 200,
			damping: 25
		},
		x: {
			type: 'spring',
			stiffness: 100
		}
	}

	const variants = {
		play: {
			rotateZ: 22,
			y: 20,
			x: -5,
			transition: {
				rotateZ: {
					type: 'spring',
					stiffness: 200,
					damping: 25,
					delay: 0.3
				},
				x: {
					type: 'spring',
					stiffness: 100,
					delay: 0.3
				},
				y: {
					type: 'spring',
					stiffness: 100,
					delay: 0.3
				}
			}
		},
		stay: {
			rotateZ: 0,
			y: 0,
			x: 0
		},
		lifting: {
			rotateZ: 7,
			y: 17,
			x: 0,
			transition: { ...transitionPropsForLifting }
		}
	}

	return (
		<motion.div
			variants={variants}
			initial={{ y: 0, rotateZ: 0, x: 0 }}
			animate={isPlaying ? (hasLifted ? 'play' : 'lifting') : 'stay'}
			onAnimationComplete={() => {
				if (isPlaying && !hasLifted) {
					setHasLifted(true)
				}
			}}
			className={
				isPlaying
					? `${s.needleConstruction} ${s.spinNeedle}`
					: s.needleConstruction
			}
			style={{
				backgroundColor: secondaryColor
			}}
		/>
	)
}
