import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISong } from './types'

interface Props {
	data: ISong
	isLiked: boolean
}

const initialState: Props = {
	data: {
		id: null,
		playedAt: 0,
		duration: 0,
		elapsed: 0,
		thumbnail: '',
		title: 'Unknown',
		author: 'Unknown',
		playlist: null,
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
		setSong: (state, action: PayloadAction<ISong>) => {
			state.data = action.payload
		}
	}
})

export const { toggleLike, setLike, setSong } = songSlice.actions

export default songSlice.reducer
