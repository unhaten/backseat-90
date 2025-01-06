import s from './style.module.css'

type Props = {
	runningName: string
}

export const RunningName = ({ runningName }: Props) => {
	return (
		<div
			className={`${s.textContainer} absolute text-white overflow-hidden h-6 w-12 bg-gray-600 
        border-2 border-black rounded-sm bottom-6 right-3 z-[2]`}
		>
			<div
				className={`${s.textInnerContainer} flex items-center justify-center h-full`}
			>
				<p
					className={`${s.textLine} font-bebasNeue text-xs m-0 mt-0.5`}
				>
					{runningName}
				</p>
				<p
					className={`${s.textLine} font-bebasNeue text-xs m-0 mt-0.5`}
				>
					{runningName}
				</p>
				<p
					className={`${s.textLine} font-bebasNeue text-xs m-0 mt-0.5`}
				>
					{runningName}
				</p>
			</div>
		</div>
	)
}
