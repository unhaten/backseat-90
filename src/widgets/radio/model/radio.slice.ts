import { createSlice } from '@reduxjs/toolkit'
import { IRadio } from './radio.type'

const initialState: IRadio = {
	isPlaying: false
}

export const radioSlice = createSlice({
	name: 'radio',
	initialState,
	reducers: {
		toggleRadio: state => {
			state.isPlaying = !state.isPlaying
		}
	}
})

export const { toggleRadio } = radioSlice.actions

export default radioSlice.reducer
