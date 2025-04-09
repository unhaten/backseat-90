import { setUser } from '@/entities/user'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux'
import { useEffect } from 'react'
import { useProfile } from './react-query'
// import { toast } from 'sonner'

export const useAuth = () => {
	const dispatch = useAppDispatch()
	const user = useAppSelector(state => state.user)

	const { data, isSuccess, isPending } = useProfile()

	useEffect(() => {
		if (isSuccess) {
			dispatch(setUser(data))
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, isSuccess])

	return { user, isPending }
}
