import Image from 'next/image'

export const Song = () => {
	return (
		<div className='flex'>
			<div className='relative w-28 h-28'>
				<Image src='/cover-1.webp' fill alt='song cover' />
			</div>
            <p>Now playing:</p>
		</div>
	)
}
