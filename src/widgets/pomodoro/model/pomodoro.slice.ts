import { createSlice } from '@reduxjs/toolkit'

const pomodoroSlice = createSlice({
	name: 'pomodoro',
	initialState: {},
	reducers: {
		start: state => {
			return state
		}
	}
})

export const { start } = pomodoroSlice.actions

export default pomodoroSlice.reducer
