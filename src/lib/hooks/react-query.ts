import { getProfile } from '@/api/actions'
import { useQuery } from '@tanstack/react-query'

export const useProfileNoRetry = () =>
	useQuery({
		queryKey: ['profile'],
		queryFn: getProfile,
		retry: false,
		refetchOnWindowFocus: true
	})

// export const useIfSongIsLikedNoRetry = (songId: number) =>
// 	useQuery({
// 		queryKey: ['bookmarks', songId],
// 		queryFn: () => checkIfSongIsLiked(songId),
// 		retry: false
// 	})
