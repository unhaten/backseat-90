import Player from '@/components/player'
import AlbumCover from '@/components/album-cover'
import Vinyl from '@/components/vinyl'
import Image from 'next/image'

export const Radio = () => {
	return (
		<>
			{/* Background GIF */}
			{/* FIXME: //! if it is webp then we need to set unoptimized property */}
			<Image
				className='absolute top-0 left-0 z-0 w-full h-full object-center'
				src={'/gifwebp.webp'}
				alt='the gif'
				unoptimized
				fill
			/>

			{/* Content */}
			<div className='relative flex flex-col items-center justify-center h-screen sm:h-full'>
				<div className='relative z-10 flex flex-col items-center justify-center'>
					<h1 className='font-rockSalt text-3xl sm:text-6xl my-0'>
						Backseat 90
					</h1>
					<div className='relative z-[2] pr-2 pb-2 my-6 isolate rounded-md bg-blue-300/90 shadow-blue-500/40 shadow-lg ring-1 ring-blue-600/5'>
						<div className='absolute h-4 z-1 w-4 top-0 left-0 bg-red-300' />
						<AlbumCover />
						<Vinyl />
					</div>
					<Player />
				</div>
			</div>
		</>
	)
}
