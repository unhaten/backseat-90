import { IPlayer } from './player.type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: IPlayer = {
	isPlaying: false,
	mainColor: '#e7568d',
	secondaryColor: '#ea6a9b',
	volume: 75,
	listeningUsers: 1,
	url: undefined
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
		// setDuration: (state, action) => {
		// 	state.duration = action.payload
		// }
		setStreamUrl: (state, action: PayloadAction<string | undefined>) => {
			state.url = action.payload
		}
	}
})

export const { togglePlayer, setVolume, setStreamUrl } = playerSlice.actions

export default playerSlice.reducer
