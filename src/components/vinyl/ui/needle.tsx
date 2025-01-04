import { motion } from 'framer-motion'
import s from '../vinyl.module.css'
import { useState, useEffect } from 'react'

type Props = { mainColor: string; isPlaying: boolean }

export const Needle = ({ mainColor, isPlaying }: Props) => {
	const mainColorWithOpacity = mainColor + '4d'
	const [hasLifted, setHasLifted] = useState(false) // Стейт для отслеживания завершения подъема

	// Сбросить флаг hasLifted, когда isPlaying меняется на false
	useEffect(() => {
		if (!isPlaying) {
			setHasLifted(false) // При остановке сбрасываем флаг
		}
	}, [isPlaying])

	const variants = {
		play: {
			rotateZ: [0, 3, -3, 0], // Вращение от 0 до 3 и обратно
			x: 0,
			transition: {
				rotateZ: {
					repeat: Infinity,
					repeatType: 'reverse' as const,
					duration: 1.5,
					repeatDelay: 0.5
				},
				x: {}
			}
		},
		stay: {
			rotateZ: -50, // Начальное положение иглы при остановке
			x: 40,
			transition: {
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
		},
		lifting: {
			rotateZ: 0, // Вращение от -50 до 0 при подъеме
			x: 0, // Можно добавить, если игла должна двигаться по оси X
			transition: {
				rotateZ: {
					type: 'spring',
					stiffness: 200,
					damping: 25,
					duration: 1 // Длительность подъема
				},
				x: {
					type: 'spring',
					stiffness: 100
				}
			}
		}
	}

	return (
		<motion.div
			variants={variants}
			className={s.needle}
			initial={{ rotateZ: -50, x: 40 }} // Начальное положение
			animate={isPlaying ? (hasLifted ? 'play' : 'lifting') : 'stay'} // Если поднята, начинаем вращение
			onAnimationComplete={() => {
				if (isPlaying && !hasLifted) {
					setHasLifted(true) // После завершения подъема начинаем вращение
				}
			}}
			style={{
				boxShadow: `0px 2px 10px 2px ${mainColorWithOpacity}`,
				backgroundColor: mainColor
			}}
		/>
	)
}
