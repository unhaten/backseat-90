'use client'

import { useQuery } from '@tanstack/react-query'
import { LogButton, Settings } from './components'
import { getProfile } from '@/api/actions'
import { Button } from '@/components/ui'
import { Hourglass } from 'lucide-react'

export const Profile = () => {
	const { isPending, isSuccess } = useQuery({
		queryKey: ['profile'],
		queryFn: getProfile,
		staleTime: 1000 * 60 * 5,
		refetchOnWindowFocus: false,
		retry: false,
		refetchInterval: 1000 * 60 * 2,
		refetchIntervalInBackground: true
	})

	if (isPending)
		return (
			<Button
				className='absolute top-2 right-2 rounded-full animate-spin hover:bg-background cursor-default'
				variant={'outline'}
				size='icon'
			>
				<Hourglass className='stroke-foreground' />
			</Button>
		)

	return <>{isSuccess ? <Settings /> : <LogButton />}</>
}
