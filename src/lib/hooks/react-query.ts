import { getProfile } from '@/api/actions'
import { useQuery } from '@tanstack/react-query'

export const useProfileNoRetry = () =>
	useQuery({
		queryKey: ['profile'],
		queryFn: getProfile,
		retry: false
	})
