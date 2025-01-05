import { IRadio } from './radio.type'
import { createSlice } from '@reduxjs/toolkit'

const initialState: IRadio = {
	isPlaying: false,
	mainColor: '#e7568d',
	secondaryColor: '#ea6a9b',
	songName: 'untitled'
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
