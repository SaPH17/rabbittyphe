import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AdditionalConfig } from '../../types/config'

type ActiveConfigState = {
  value: string
  activeAdditionalConfig: string
  additionalConfig: AdditionalConfig[]
}

const initialState: ActiveConfigState = {
  value: 'time',
  activeAdditionalConfig: "60",
  additionalConfig: [
    { label: '10', value: '10' },
    { label: '30', value: '30' },
    { label: '60', value: '60' },
    { label: '120', value: '120' },
  ],
}

type ActiveConfig = {
  value: string
  activeAdditionalConfig: string
  additionalConfig: AdditionalConfig[]
}

export const activeConfigSlice = createSlice({
  name: 'activeConfig',
  initialState,
  reducers: {
    setActiveConfig: (state, action: PayloadAction<ActiveConfig>) => {
      state.value = action.payload.value
      state.additionalConfig = action.payload.additionalConfig
      state.activeAdditionalConfig = action.payload.activeAdditionalConfig
    },
    setActiveAdditionalConfig: (state, action: PayloadAction<string>) => {
      state.activeAdditionalConfig = action.payload
    },
  },
})

export const { setActiveConfig, setActiveAdditionalConfig } = activeConfigSlice.actions

export default activeConfigSlice.reducer
