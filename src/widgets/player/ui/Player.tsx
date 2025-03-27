'use client'

import { useAppSelector } from '@/lib/hooks/redux'
import { useEffect, useRef } from 'react'
import { Song } from '@/entities/song'
import { PlayerLoader } from '@/components'
import { useNowPlayingSong } from '@/lib/hooks/react-query'
import { useAudioVolume } from '../lib/useAudioVolume'
import { useAudioPlayback } from '../lib/useAudioPlayback'
import { useSyncNowPlayingSong } from '../model/useSyncNowPlayingSong'
import { toast } from 'sonner'
import { Controls } from './controls/Controls'
import { Audio } from './audio/Audio'
import { Reconnect } from './reconnect/Reconnect'
import { useTranslations } from 'next-intl'
// import { API_PUBLIC_URL } from '@/lib/config'

export const Player = () => {
	const { data, isLoading: isSongDataLoading, isError } = useNowPlayingSong()
	const t = useTranslations('HomePage')

	const audioRef = useRef<HTMLAudioElement>(null)
	const player = useAppSelector(state => state.player)

	useAudioVolume(audioRef)
	useAudioPlayback(audioRef)
	// FIXME: //! after changing language of the app while radio is turned on it reloads the page and state is still isPlaying while you can't really hear the song. SAME SITUATION when you go to login page and back after successful login
	useSyncNowPlayingSong(data)
	// FIXME: //! pressing spacebar ignores everything and can create delay between radio and playback
	// useSpacebarPlayback()

	useEffect(() => {
		if (!audioRef.current) return
		audioRef.current.load() //* forcing because mobile browsers does not preload music smh
		// handleLoad()
	}, [audioRef])

	useEffect(() => {
		if (!data?.success) {
			toast.warning(t('cant-connect'))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data?.success])

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
					<Reconnect isError={isError} />
				) : (
					<Controls />
				)}
			</>
		</div>
	)
}
