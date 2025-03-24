type Props = {
	title: string
	author: string
}

export const SongInfo = ({ title, author }: Props) => {
	return (
		<div className='w-full'>
			<h3 className='font-semibold text-xl md:text-2xl'>{author}</h3>
			<h4 className='text-sm md:text-base'>{title}</h4>
		</div>
	)
}
