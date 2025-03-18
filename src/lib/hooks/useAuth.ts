import { setUser } from '@/entities/user'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux'
import { useEffect } from 'react'
import { useProfile } from './react-query'

export const useAuth = () => {
	const dispatch = useAppDispatch()
	const user = useAppSelector(state => state.user)

	const { data, isError, isSuccess, isPending } = useProfile()

	useEffect(() => {
		if (isSuccess && data) {
			dispatch(setUser(data))
		} else if (isError) {
			dispatch(setUser(null))
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, isError, isSuccess])

	return { user, isPending }
}
