import { configureStore } from '@reduxjs/toolkit'
import activeConfigReducer from './slices/activeConfig'
import wordListReducer from './slices/word'

const store = configureStore({
  reducer: {
    activeConfig: activeConfigReducer,
    wordList: wordListReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch