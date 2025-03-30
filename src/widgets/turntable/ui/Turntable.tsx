'use client'

import { useAppSelector } from '@/lib/hooks/redux'
import { AlbumCover } from './album-cover/AlbumCover'
import { Details } from './details/Details'
import { Vinyl } from './vinyl/Vinyl'
import { Wheels } from './wheels/Wheels'
import { CurrentListeners } from './current-listeners/CurrentListeners'

export const Turntable = () => {
	const player = useAppSelector(state => state.player)

	return (
		<div className='relative mb-6 p-6 mx-auto w-fit bg-rose-500/75 rounded-lg'>
			<div className='relative z-[2] pr-2 pb-2 rounded-md bg-blue-300/85 ring-2 ring-blue-600/20'>
				<AlbumCover />
				<Vinyl player={player} />
				<Details />
				<CurrentListeners listeningUsers={player.listeningUsers} />
			</div>
			<Wheels />
		</div>
	)
}
