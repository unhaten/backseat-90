import { IPlayer } from './player.type'
import { createSlice } from '@reduxjs/toolkit'

const initialState: IPlayer = {
	isPlaying: false,
	mainColor: '#e7568d',
	secondaryColor: '#ea6a9b',
	songName: 'untitled',
	volume: 100
}

const playerSlice = createSlice({
	name: 'player',
	initialState,
	reducers: {
		togglePlayer: state => {
			state.isPlaying = !state.isPlaying
		},
		setVolume: (state, action) => {
			state.volume = action.payload
		}
	}
})

export const { togglePlayer, setVolume } = playerSlice.actions

export default playerSlice.reducer
