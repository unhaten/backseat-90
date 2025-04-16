import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPomodoro } from './pomodoro.type'

const initialState: IPomodoro = {
	status: 'idle',
	secondsLeft: 0
}

const pomodoroSlice = createSlice({
	name: 'pomodoro',
	initialState,
	reducers: {
		startTimer: state => {
			state.status = 'running'
		},
		pauseTimer: state => {
			state.status = 'paused'
		},
		resetTimer: (state, action: PayloadAction<number>) => {
			state.status = 'stopped'
			state.secondsLeft = action.payload
		},
		tick: state => {
			if (state.secondsLeft > 0) {
				state.secondsLeft -= 1
			}
		}
	}
})

export const { startTimer, pauseTimer, resetTimer, tick } =
	pomodoroSlice.actions

export default pomodoroSlice.reducer
