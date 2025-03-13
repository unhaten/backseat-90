import { createSlice } from '@reduxjs/toolkit'
import { ISong } from '../types/type'

interface Props {
	data: ISong
	isLiked: boolean
}

const initialState: Props = {
	data: {
		id: 'default',
		playedAt: 0,
		duration: 0,
		elapsed: 0,
		thumbnail: 'https://placehold.co/80x80',
		title: 'Unknown',
		author: 'Unknown',
		playlist: 'default',
		likes: 0
	},
	isLiked: false
}

const songSlice = createSlice({
	name: 'song',
	initialState,
	reducers: {
		toggleLike: state => {
			state.isLiked = !state.isLiked
		},
		setLike: (state, action: { payload: boolean }) => {
			state.isLiked = action.payload
		},
		setSong: (state, action) => {
			state.data = action.payload
		}
	}
})

export const { toggleLike, setLike, setSong } = songSlice.actions

export default songSlice.reducer
