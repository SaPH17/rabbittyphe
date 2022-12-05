import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AdditionalConfig } from '../../models/config'

type ActiveConfigState = {
  value: string
  activeAdditionalConfig: string
  additionalConfig: AdditionalConfig[]
}

const initialState: ActiveConfigState = {
  value: 'time',
  activeAdditionalConfig: '10',
  additionalConfig: [
    { label: '10', value: '10' },
    { label: '30', value: '30' },
    { label: '60', value: '60' },
    { label: '120', value: '120' },
  ],
}

export const activeConfigSlice = createSlice({
  name: 'activeConfig',
  initialState,
  reducers: {
    setActiveConfig: (state, action: PayloadAction<ActiveConfigState>) => {
      state.value = action.payload.value
      state.additionalConfig = action.payload.additionalConfig
      state.activeAdditionalConfig = action.payload.activeAdditionalConfig
    },
    setActiveAdditionalConfig: (state, action: PayloadAction<string>) => {
      state.activeAdditionalConfig = action.payload
    },
  },
})

export const { setActiveConfig } = activeConfigSlice.actions

export default activeConfigSlice.reducer
