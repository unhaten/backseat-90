import { Player } from '@/widgets/player'
import { Turntable } from '@/widgets/turntable'
import Image from 'next/image'

export default async function Home() {
	return (
		<>
			{/* //* Background GIF hex = 93c5fd */}
			{/* FIXME: //! if it is webp then we need to set unoptimized property */}
			<Image
				className='absolute top-0 left-0 z-0 w-full h-full object-center'
				src={'/gifwebp2.webp'}
				alt='the gif'
				unoptimized
				fill
			/>
			{/* <Image
				className='absolute top-0 left-0 z-0 w-full h-full object-center'
				src={'/pattern.svg'}
				alt='the image'
				fill
			/> */}
			<div className='relative flex items-center bg-background/30 justify-center min-h-screen w-screen sm:p-8'>
				{/* //* Content */}
				<div className='bg-rose-300/50 rounded-lg p-4 md:p-8 w-96'>
					{/* <h1 className='font-rockSalt text-3xl sm:text-6xl my-0'>
						Backseat 90
					</h1> */}
					<Turntable />
					<Player />
				</div>
			</div>
		</>
	)
}
