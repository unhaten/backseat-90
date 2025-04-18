import { IPlayer } from './player.type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: IPlayer = {
	isPlaying: false,
	mainColor: '#e7568d',
	secondaryColor: '#ea6a9b',
	volume: 50,
	listeningUsers: 0,
	url: undefined
}

const playerSlice = createSlice({
	name: 'player',
	initialState,
	reducers: {
		togglePlayer: state => {
			state.isPlaying = !state.isPlaying
		},
		setVolume: (state, action: PayloadAction<number>) => {
			state.volume = action.payload
			localStorage?.setItem('playerVolume', String(action.payload))
		},
		// setDuration: (state, action) => {
		// 	state.duration = action.payload
		// }
		setStreamUrl: (state, action: PayloadAction<string | undefined>) => {
			state.url = action.payload
		},
		setListeners: (state, action) => {
			state.listeningUsers = action.payload
		}
	}
})

export const { togglePlayer, setVolume, setStreamUrl, setListeners } =
	playerSlice.actions

export default playerSlice.reducer
