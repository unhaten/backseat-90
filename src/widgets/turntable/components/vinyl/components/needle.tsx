import { motion } from 'framer-motion'
import s from '../vinyl.module.css'
import { useState, useEffect } from 'react'

type Props = { mainColor: string; isPlaying: boolean }

// TODO: refactor and make less code

export const Needle = ({ mainColor, isPlaying }: Props) => {
	const mainColorWithOpacity = mainColor + '4d'
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
			rotateZ: [0, 5, -5, 0],
			x: -15,
			transition: {
				rotateZ: {
					repeat: Infinity,
					repeatType: 'reverse' as const,
					duration: 3,
					repeatDelay: 1,
					delay: 1
				}
			}
		},
		stay: {
			rotateZ: -50,
			x: 7
		},
		lifting: {
			rotateZ: 0,
			x: -5,
			transition: { ...transitionPropsForLifting }
		}
	}

	return (
		<motion.div
			variants={variants}
			className={s.needle}
			initial={{ rotateZ: -50, x: 7 }}
			animate={isPlaying ? (hasLifted ? 'play' : 'lifting') : 'stay'}
			onAnimationComplete={() => {
				if (isPlaying && !hasLifted) {
					setHasLifted(true)
				}
			}}
			style={{
				boxShadow: `0px 2px 10px 2px ${mainColorWithOpacity}`,
				backgroundColor: mainColor
			}}
		/>
	)
}
