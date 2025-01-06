import { Player } from '@/widgets/player'
import { Song } from '@/widgets/song'
import { Turntable } from '@/widgets/turntable'
import Image from 'next/image'

export default function Home() {
	return (
		<>
			{/* //* Background GIF #93c5fd */}
			{/* FIXME: //! if it is webp then we need to set unoptimized property */}
			<Image
				className='absolute top-0 left-0 z-0 w-full h-full object-center'
				src={'/gif3.gif'}
				alt='the gif'
				unoptimized
				fill
			/>
			<div className='relative flex items-center bg-background/30 justify-center min-h-screen w-screen sm:p-8'>
				{/* //* Content */}
				<div className='bg-blue-300/35 rounded-lg p-8'>
					<div className='relative flex flex-col items-center justify-center h-screen sm:h-full'>
						<h1 className='font-rockSalt text-3xl sm:text-6xl my-0'>
							Backseat 90
						</h1>
						<Turntable />
						<div className='flex items-center gap-2 w-full'>
							<Song />
							<Player />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
