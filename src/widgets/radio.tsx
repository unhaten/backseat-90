'use client'

import { AlbumCover } from '@/components/album-cover/album-cover'
import { Player } from '@/components/player/player'
import { Vinyl } from '@/components/vinyl/vinyl'

type Props = object
export const Radio = ({}: Props) => {
	return (
		<div className='flex flex-col items-center justify-center'>
			<h1 className='font-rockSalt text-3xl sm:text-6xl my-0'>
				Backseat 90
			</h1>
			<div className='relative my-6'>
				<div className='bg-red-500 w-full h-full rounded-md' />
				{/* <AlbumCover /> */}
				<Vinyl />
			</div>
			<Player />
		</div>
	)
}
