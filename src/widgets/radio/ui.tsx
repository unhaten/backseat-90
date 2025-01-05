import Player from '@/components/player'
import AlbumCover from '@/components/album-cover'
import Vinyl from '@/components/vinyl'
import Image from 'next/image'
import { Details } from '@/components/vinyl/components/details/details'
import { Wheels } from './ui/wheels'

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
				<div className='flex flex-col items-center justify-center'>
					<h1 className='font-rockSalt text-3xl sm:text-6xl my-0'>
						Backseat 90
					</h1>
					<div className='relative my-6'>
						<div className='relative z-[4] pr-2 pb-2 rounded-md bg-blue-300/90 ring-1 ring-blue-600/5'>
							<AlbumCover />
							<Vinyl />
							<Details />
						</div>
						<Wheels />
					</div>
					<Player />
				</div>
			</div>
		</>
	)
}
