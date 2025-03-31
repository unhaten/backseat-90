import { useTranslations } from 'next-intl'
import s from './style.module.css'

type Props = {
	listeningUsers: number
}

export const CurrentListeners = ({ listeningUsers }: Props) => {
	const t = useTranslations('HomePage')

	return (
		<div
			className={`${s.textContainer} absolute text-white overflow-hidden h-6 w-12 bg-gray-600 
        border-2 border-black rounded-sm bottom-6 right-3 z-[2] select-none`}
		>
			<div
				className={`${s.textInnerContainer} flex items-center justify-center h-full`}
			>
				{[1, 2, 3].map(index => {
					return (
						<p
							key={index}
							className={`${s.textLine} uppercase font-alumni text-sm font-semibold m-0 mt-0.5`}
						>
							{t('online')}: {listeningUsers}
						</p>
					)
				})}
			</div>
		</div>
	)
}
