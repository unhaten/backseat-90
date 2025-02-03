'use client'

import { useQuery } from '@tanstack/react-query'
import { LogButton, Settings } from './components'
import { getProfile } from '@/api/actions'
import { Button } from '@/components/ui'
import { Hourglass } from 'lucide-react'

export const Profile = () => {
	const { data, isPending } = useQuery({
		queryKey: ['profile'],
		queryFn: getProfile,
		staleTime: 1000 * 60 * 5, // 5 minutes
		refetchOnWindowFocus: false
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

	return <>{data ? <Settings /> : <LogButton />}</>
}
