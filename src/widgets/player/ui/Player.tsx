'use client'

import { useAppSelector } from '@/lib/hooks/redux'
import { useRef } from 'react'
import { Song } from '@/entities/song'
import { PlayerLoader } from '@/components'
import { useNowPlayingSong } from '@/lib/hooks/react-query'
import { useAudioVolume } from '../lib/useAudioVolume'
import { useAudioPlayback } from '../lib/useAudioPlayback'
import { useSyncNowPlayingSong } from '../model/useSyncNowPlayingSong'
import { Controls } from './controls/Controls'
import { Audio } from './audio/Audio'
import { Reconnect } from './reconnect/Reconnect'
import { useMobilePreload } from '../lib/useMobilePreload'
import { useConnectionWarning } from '../lib/useConnectionWarning'
// import { API_PUBLIC_URL } from '@/lib/config'

export const Player = () => {
	const { data, isLoading: isSongDataLoading } = useNowPlayingSong()

	const audioRef = useRef<HTMLAudioElement>(null)
	const player = useAppSelector(state => state.player)

	useAudioVolume(audioRef)
	useMobilePreload(audioRef)
	useAudioPlayback(audioRef)
	// FIXME: //! after changing language of the app while radio is turned on it reloads the page and state is still isPlaying while you can't really hear the song. SAME SITUATION when you go to login page and back after successful login
	useSyncNowPlayingSong(data)
	// FIXME: //! pressing spacebar ignores everything and can create delay between radio and playback
	// useSpacebarPlayback()
	useConnectionWarning(data)

	return (
		<div>
			<>
				{/* //? h = 82px mb-4 */}
				{data?.success && (
					<>
						<Audio audioRef={audioRef} url={player.url} />
						<Song />
					</>
				)}
				{isSongDataLoading && <PlayerLoader />}
				{!data?.success ? (
					<Reconnect
						isSuccess={data?.success}
						isLoading={isSongDataLoading}
					/>
				) : (
					<Controls />
				)}
			</>
		</div>
	)
}
