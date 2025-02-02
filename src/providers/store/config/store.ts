import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { playerReducer } from '@/widgets/player'
import { imageReducer } from '@/widgets/background-image'

const rootReducer = combineReducers({
	player: playerReducer,
	image: imageReducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
