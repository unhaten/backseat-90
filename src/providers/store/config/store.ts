import { combineReducers, configureStore } from '@reduxjs/toolkit'
import playerReducer from '@/widgets/radio/index'

const rootReducer = combineReducers({
	player: playerReducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
