import Player from '@/components/player'
import AlbumCover from '@/components/album-cover'
import Vinyl from '@/components/vinyl'

export const Radio = () => {
	return (
		<div className='flex flex-col items-center justify-center'>
			<h1 className='font-rockSalt text-3xl sm:text-6xl my-0'>
				Backseat 90
			</h1>
			<div className='relative my-6'>
				<div className='bg-red-500 w-full h-full rounded-md' />
				<AlbumCover />
				<Vinyl />
			</div>
			<Player />
		</div>
	)
}
