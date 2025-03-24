import { checkIfSongIsLiked, getLikedSongs, getProfile } from '@/api/actions'
import { getImages, getNowPlayingSong } from '@/api/server-actions'
import { useQuery } from '@tanstack/react-query'

export const useNowPlayingSong = () =>
	useQuery({
		queryKey: ['now-playing'],
		queryFn: getNowPlayingSong,
		refetchInterval: 3000
	})

export const useProfile = () =>
	useQuery({
		queryKey: ['profile'],
		queryFn: getProfile,
		staleTime: 1000 * 60 * 5,
		refetchOnWindowFocus: false,
		retry: false,
		refetchInterval: 1000 * 60 * 2,
		refetchIntervalInBackground: true
	})

export const useProfileNoRetry = () =>
	useQuery({
		queryKey: ['profile'],
		queryFn: getProfile,
		retry: false,
		refetchOnWindowFocus: true
	})

export const useBookmarks = () =>
	useQuery({
		queryKey: ['bookmarks'],
		queryFn: getLikedSongs,
		staleTime: 1000 * 60 * 5, // Cache for 5 minutes
		refetchOnMount: false, // Prevent refetch on mount
		refetchOnWindowFocus: false, // Refresh if user comes back to the tab
		refetchInterval: 1000 * 60 * 5 // Auto-refresh every 5 minutes
	})

export const useLikedSong = (songId: string | null) =>
	useQuery({
		queryKey: ['is-liked'],
		queryFn: () => checkIfSongIsLiked(songId),
		retry: false,
		enabled: false
	})

export const useBackgroundImage = (imageId: number) =>
	useQuery({
		queryKey: ['image-generator'],
		queryFn: () => getImages(imageId),
		staleTime: 0,
		refetchOnMount: false,
		refetchOnWindowFocus: false
	})
