import { getProfile } from '@/api/actions'
import { getNowPlayingSong } from '@/api/server-actions'
import { useQuery } from '@tanstack/react-query'

export const useProfileNoRetry = () =>
	useQuery({
		queryKey: ['profile'],
		queryFn: getProfile,
		retry: false,
		refetchOnWindowFocus: true
	})

export const useNowPlayingSong = () =>
	useQuery({
		queryKey: ['now-playing'],
		queryFn: getNowPlayingSong,
		refetchInterval: 3000
	})

// export const useIfSongIsLikedNoRetry = (songId: number) =>
// 	useQuery({
// 		queryKey: ['bookmarks', songId],
// 		queryFn: () => checkIfSongIsLiked(songId),
// 		retry: false
// 	})
