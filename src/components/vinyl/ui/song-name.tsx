type Props = {
	songName: string
}

export const SongName = ({ songName='miachel jackson' }: Props) => {
	return (
		<div
			className='absolute overflow-hidden h-6 w-12 bg-gray-600 
        border-2 border-black rounded-sm bottom-4 right-1'
		>
			<div className='flex items-center justify-center h-full'>
				<p className='font-bebasNeue text-xs m-0 mt-0.5'>{songName}</p>
			</div>
		</div>
	)
}
