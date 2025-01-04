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
			rotateZ: [0, 4, -4, 0],
			x: 0,
			transition: {
				rotateZ: {
					repeat: Infinity,
					repeatType: 'reverse' as const,
					duration: 3,
					repeatDelay: 1
				}
			}
		},
		stay: {
			rotateZ: -50,
			x: 40,
			transition: { ...transitionPropsForLifting }
		},
		lifting: {
			rotateZ: 0,
			x: 0,
			transition: { ...transitionPropsForLifting }
		}
	}

	return (
		<motion.div
			variants={variants}
			className={s.needle}
			initial={{ rotateZ: -50, x: 40 }}
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
