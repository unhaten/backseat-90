import { createSlice } from '@reduxjs/toolkit'
// import { ISong } from '../types/type'

const initialState = {
	data: {},
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
