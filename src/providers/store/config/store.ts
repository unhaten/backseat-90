import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { playerReducer } from '@/widgets/player'
import { imageReducer } from '@/widgets/background-image'
import { songReducer } from '@/entities/song'

const rootReducer = combineReducers({
	player: playerReducer,
	image: imageReducer,
	song: songReducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
