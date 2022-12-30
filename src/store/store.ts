import { configureStore } from '@reduxjs/toolkit'
import activeConfigReducer from './slices/activeConfig'
import wordListReducer from './slices/word'
import testReducer from './slices/test'
import leaderboardsReducer from './slices/leaderboards'

const store = configureStore({
	reducer: {
		activeConfig: activeConfigReducer,
		wordList: wordListReducer,
		test: testReducer,
		leaderboards: leaderboardsReducer,
	},
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
