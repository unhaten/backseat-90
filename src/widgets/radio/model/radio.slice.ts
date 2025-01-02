import { IRadio } from './radio.type'
import { createSlice } from '@reduxjs/toolkit'

const initialState: IRadio = {
	isPlaying: false,
	color: '#da5b33'
}

const radioSlice = createSlice({
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
