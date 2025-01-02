import { motion } from 'motion/react'
import s from '../vinyl.module.css'
import { useEffect, useState } from 'react'

type Props = { mainColor: string; secondaryColor: string; isPlaying: boolean }
export const Record = ({ mainColor, secondaryColor, isPlaying }: Props) => {
	const [rotation, setRotation] = useState(0)
	const colorWithOpacity = secondaryColor + '4d'

	const boxShadow = `0px 0px 4px 1px ${colorWithOpacity}, 0px 0px 0px 10px ${secondaryColor},
		0px 0px 3px 11px ${colorWithOpacity}, 0px 0px 0px 16px #000, 0px 0px 0px 17px #252424,
		0px 0px 0px 18px #000, 0px 0px 0px 19px #313030, 0px 0px 0px 20px #000,
		0px 0px 0px 21px #3a3838, 0px 0px 0px 22px #000,
		0px 0px 0px 23px #2b2a2a, 0px 0px 0px 24px #000,
		0px 0px 0px 25px #313030, 0px 0px 0px 26px #000,
		0px 0px 0px 27px #313030, 0px 0px 0px 28px #000,
		0px 0px 0px 29px #333333, 0px 0px 0px 30px #000,
		0px 0px 0px 31px #333232, 0px 0px 0px 32px #000,
		0px 0px 0px 33px #4c4a4a, 0px 0px 0px 34px #000,
		0px 0px 0px 35px #2f2e2e, 0px 0px 0px 36px #000,
		0px 0px 0px 37px #252424, 0px 0px 0px 38px #000,
		0px 0px 0px 39px #2f2e2e, 0px 0px 0px 40px #000,
		0px 0px 0px 41px #2f2e2e, 0px 0px 0px 42px #000,
		0px 0px 0px 55px #2f2e2e, 0px 0px 0px 56px #000,
		0px 0px 0px 57px #2f2e2e, 0px 0px 0px 58px ${mainColor},
		0px 0px 0px 59px ${colorWithOpacity}`

	// const motionProps = isPlaying
	// 	? {
	// 			animate: { rotate: 360 },
	// 			transition: {
	// 				repeat: Infinity,
	// 				repeatType: 'loop' as const,
	// 				duration: 1.3,
	// 				ease: 'linear'
	// 			}
	// 	  }
	// 	: {}

	useEffect(() => {
		if (isPlaying) {
			const interval = setInterval(() => {
				setRotation(prevRotation => prevRotation + 1)
			}, 13) // To make a complete 360 in 1.3 seconds, adjust the step size accordingly
			return () => clearInterval(interval)
		}
	}, [isPlaying])

	return (
		<motion.div
			// {...motionProps}
			className={`${s.record} ${isPlaying ? s.spin : ''}`}
			style={{
				boxShadow: boxShadow,
				border: `solid ${mainColor}`,
			}}
			animate={{ rotate: rotation }}
			transition={{
				duration: 1.3, // Duration for one full rotation
				ease: 'linear',
			}}
		/>
	)
}
