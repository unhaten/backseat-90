import { IPlayer } from './player.type'
import { createSlice } from '@reduxjs/toolkit'

const initialState: IPlayer = {
	isPlaying: false,
	mainColor: '#e7568d',
	secondaryColor: '#ea6a9b',
	volume: 100,
	listeningUsers: 1,
	duration: 0
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
		},
		setDuration: (state, action) => {
			state.duration = action.payload
		}
	}
})

export const { togglePlayer, setVolume, setDuration } = playerSlice.actions

export default playerSlice.reducer
