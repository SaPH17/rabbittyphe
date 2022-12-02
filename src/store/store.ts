import { configureStore } from '@reduxjs/toolkit'
import activeConfigReducer from './slices/activeConfig'

const store = configureStore({
  reducer: {
    activeConfig: activeConfigReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch