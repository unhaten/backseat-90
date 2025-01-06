import s from './style.module.css'

type Props = {
	songName: string
}

export const SongName = ({ songName }: Props) => {
	return (
		<div
			className={`${s.textContainer} absolute overflow-hidden h-6 w-12 bg-gray-600 
        border-2 border-black rounded-sm bottom-6 right-3 z-[2]`}
		>
			<div
				className={`${s.textInnerContainer} flex items-center justify-center h-full`}
			>
				<p
					className={`${s.textLine} font-bebasNeue text-xs m-0 mt-0.5`}
				>
					{songName}
				</p>
				<p
					className={`${s.textLine} font-bebasNeue text-xs m-0 mt-0.5`}
				>
					{songName}
				</p>
				<p
					className={`${s.textLine} font-bebasNeue text-xs m-0 mt-0.5`}
				>
					{songName}
				</p>
			</div>
		</div>
	)
}
