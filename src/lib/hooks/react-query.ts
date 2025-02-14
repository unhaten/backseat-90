import { checkIfSongIsLiked, getProfile } from '@/api/actions'
import { useQuery } from '@tanstack/react-query'

export const useProfileNoRetry = () =>
	useQuery({
		queryKey: ['profile'],
		queryFn: getProfile,
		retry: false
	})

export const useIfSongIsLikedNoRetry = (songId: number) =>
	useQuery({
		queryKey: ['liked-songs', songId],
		queryFn: () => checkIfSongIsLiked(songId),
		retry: false
	})
