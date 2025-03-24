'use client'

import { useAppSelector } from '@/lib/hooks/redux'
import { useEffect, useRef } from 'react'
import { Controls } from './components'
import { Song } from '@/entities/song'
import { PlayerLoader } from '@/components'
import { Button } from '@/components/ui'
import { useNowPlayingSong } from '@/lib/hooks/react-query'
import { useAudioVolume } from './lib/useAudioVolume'
import { useAudioPlayback } from './lib/useAudioPlayback'
import { useSyncNowPlayingSong } from './model/useSyncNowPlayingSong'
import { toast } from 'sonner'
// import { API_PUBLIC_URL } from '@/lib/config'

export const Player = () => {
	const { data, isLoading: isSongDataLoading, isError } = useNowPlayingSong()

	const audioRef = useRef<HTMLAudioElement>(null)
	const player = useAppSelector(state => state.player)

	useAudioVolume(audioRef)
	useAudioPlayback(audioRef)
	// FIXME: //! after changing language of the app while radio is turned on it reloads the page and state is still isPlaying while you can't really hear the song. SAME SITUATION when you go to login page and back after successful login
	useSyncNowPlayingSong(data)

	useEffect(() => {
		if (!audioRef.current) return
		audioRef.current.load() //* forcing because mobile browsers does not preload music smh
		// handleLoad()
	}, [audioRef])

	useEffect(() => {
		if (!data?.success) {
			toast.warning('Unable to connect to the radio')
		}
	}, [data?.success])

	return (
		<div>
			<>
				{/* //? h = 82px mb-4 */}
				{data?.success && (
					<>
						<audio
							ref={audioRef}
							// src={
							// 	API_PUBLIC_URL +
							// 	(data?.success && data.value.file)
							// }
							preload='auto'
							// onLoadedMetadata={handleLoad}
							// src='http://localhost/listen/main_station/radio.mp3'
							src={player.url}
						/>
						<Song />
					</>
				)}
				{isSongDataLoading && <PlayerLoader />}
				{!data?.success ? (
					isError && (
						<div className='flex items-center flex-col'>
							<p>Something went wrong</p>
							<Button>
								<span>reconnect</span>
							</Button>
						</div>
					)
				) : (
					<Controls />
				)}
			</>
		</div>
	)
}
