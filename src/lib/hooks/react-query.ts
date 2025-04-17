import {
	checkIfSongIsLiked,
	getBugReportAmount,
	getLikedSongs,
	getProfile
} from '@/api/actions'
import {
	connectToRadio,
	getImages,
	getNowPlayingSong
} from '@/api/server-actions'
import { Query, useQuery } from '@tanstack/react-query'
import { serverActionToQueryFn } from '../utils'
import { StationData } from '@/widgets/player'

export const useNowPlayingSong = () =>
	useQuery<StationData>({
		queryKey: ['now-playing'],
		queryFn: serverActionToQueryFn(getNowPlayingSong),
		retry: 3,
		refetchInterval: (query: Query<StationData>) =>
			query?.state.data ? 3000 : false
	})

export const useConnectionToRadio = () =>
	useQuery({
		queryKey: ['stream-url'],
		queryFn: serverActionToQueryFn(connectToRadio),
		enabled: false
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
		queryFn: serverActionToQueryFn(() => getImages(imageId)),
		staleTime: 0,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		retry: false
	})

export const useBugReportAmount = () =>
	useQuery({
		queryKey: ['bug-report'],
		queryFn: getBugReportAmount,
		retry: false
	})
