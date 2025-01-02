import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { testReducer } from '@/providers/store/reducers' // Import the default exported reducer
import { radioReducer } from '@/widgets/radio'

const rootReducer = combineReducers({
	radio: radioReducer,
	test: testReducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
