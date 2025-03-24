import { useAppDispatch } from '@/lib/hooks/redux'
import { useEffect } from 'react'
import { setLike } from './song.slice'

type Props = {
	isRefetching: boolean
	isSongLiked: boolean
}

export const useToggleLikeOnRefetch = ({
	isRefetching,
	isSongLiked
}: Props) => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (isRefetching) {
			dispatch(setLike(false))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isRefetching])

	useEffect(() => {
		if (!isRefetching) {
			dispatch(setLike(isSongLiked))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isSongLiked, isRefetching])

	return
}
