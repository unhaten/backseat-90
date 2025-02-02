import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	imageId: 2
}

const imageSlice = createSlice({
	name: 'image',
	initialState,
	reducers: {
		setImage: (state, action) => {
			state.imageId = action.payload
		}
	}
})

export default imageSlice.reducer

export const { setImage } = imageSlice.actions
