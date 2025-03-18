import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser, UserState } from './user.type'

const initialState: UserState = {
	data: { name: 'User' },
	isAuth: false
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<IUser | null>) => {
			state.data = action.payload
			state.isAuth = !!action.payload
		},
		logout: state => {
			state.data = null
			state.isAuth = false
		}
	}
})

export const { setUser, logout } = userSlice.actions

export default userSlice.reducer
