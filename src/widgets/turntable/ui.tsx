'use client'

import { useAppSelector } from '@/lib/hooks/redux'
import { AlbumCover, Details, SongName, Vinyl, Wheels } from './components'

export const Turntable = () => {
	const player = useAppSelector(state => state.player)

	return (
		<div className='relative my-6'>
			<div className='relative z-[2] pr-2 pb-2 rounded-md bg-blue-300/90 ring-1 ring-blue-600/5'>
				<AlbumCover />
				<Vinyl player={player} />
				<Details />
			</div>
			<Wheels />
			<SongName songName={player.songName} />
		</div>
	)
}
