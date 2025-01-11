import { Pattern } from '@/components'
import { Player } from '@/widgets/player'
import { Turntable } from '@/widgets/turntable'
import Image from 'next/image'

export default async function Home() {
	return (
		<>
			{/* //* Background GIF hex = 93c5fd */}
			<Pattern />
			<Image
				className='absolute top-0 left-0 z-0 w-full h-full object-cover md:object-fill object-center'
				src={'/gifwebp2.webp'}
				alt='the gif'
				unoptimized
				fill
			/>
			<div className='relative flex items-center bg-background/30 justify-center min-h-screen w-screen sm:p-8'>
				<div className='bg-rose-500/35 rounded-lg p-4 md:p-8 w-80 md:w-96'>
					<Turntable />
					<Player />
				</div>
			</div>
		</>
	)
}
