import Image from 'next/image'

export const SongImage = () => {
	return (
		<div className='relative min-w-16 min-h-16 rounded-lg'>
			<Image
				src='/song-placeholder.png'
				fill
				alt='song placeholder'
				className='rounded-lg'
			/>
		</div>
	)
}
