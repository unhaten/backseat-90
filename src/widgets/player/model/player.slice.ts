import { IPlayer } from './player.type'
import { createSlice } from '@reduxjs/toolkit'

const initialState: IPlayer = {
	isPlaying: false,
	mainColor: '#e7568d',
	secondaryColor: '#ea6a9b',
	songName: 'untitled'
}

const playerSlice = createSlice({  
	name: 'player',
	initialState,
	reducers: {
		togglePlayer: state => {
			state.isPlaying = !state.isPlaying
		}
	}
})

export const { togglePlayer } = playerSlice.actions

export default playerSlice.reducer
