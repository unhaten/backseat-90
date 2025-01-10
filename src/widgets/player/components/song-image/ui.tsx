import Image from 'next/image'

export const SongImage = () => {
	return (
		<div className='relative min-w-24 min-h-24 rounded-lg'>
			<Image
				src='/song-placeholder.png'
				fill
				alt='song placeholder'
				className='rounded-lg'
			/>
		</div>
	)
}
