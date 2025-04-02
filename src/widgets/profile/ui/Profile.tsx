'use client'

import { Button } from '@/components/ui'
import { useAuth } from '@/lib/hooks/useAuth'
import { Hourglass } from 'lucide-react'
import { LogButton } from '../../settings/ui/features/LoginButton'
import { Settings } from '../../settings/ui/Settings'

export const Profile = () => {
	const { user, isPending } = useAuth()

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

	return <>{user.isAuth ? <Settings /> : <LogButton />}</>
}
