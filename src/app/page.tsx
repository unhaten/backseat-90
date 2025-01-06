import { Player } from '@/widgets/player'
import { Turntable } from '@/widgets/turntable'

export default function Home() {
	return (
		<div className='flex items-center justify-center min-h-screen w-screen sm:p-8'>
			{/* //* Background GIF */}
			{/* FIXME: //! if it is webp then we need to set unoptimized property */}
			{/* <Image
				className='absolute top-0 left-0 z-0 w-full h-full object-center'
				src={'/gifwebp.webp'}
				alt='the gif'
				unoptimized
				fill
			/> */}

			{/* //* Content */}
			<div className='relative flex flex-col items-center justify-center h-screen sm:h-full'>
				<h1 className='font-rockSalt text-3xl sm:text-6xl my-0'>
					Backseat 90
				</h1>
				<Turntable />
				<Player />
			</div>
		</div>
	)
}
