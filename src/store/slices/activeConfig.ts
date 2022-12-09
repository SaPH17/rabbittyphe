import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AdditionalConfig } from '../../types/config'

type ActiveConfigState = {
  value: string
  isPunctuationEnabled: boolean
  isNumberEnabled: boolean
  activeAdditionalConfig: string
  additionalConfig: AdditionalConfig[]
}

const initialState: ActiveConfigState = {
  value: 'time',
  isPunctuationEnabled: false,
  isNumberEnabled: false,
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
    togglePunctuation: (state, action: PayloadAction<boolean>) => {
      state.isPunctuationEnabled = action.payload
    },
    toggleNumber: (state, action: PayloadAction<boolean>) => {
      state.isNumberEnabled = action.payload
    }
  },
})

export const { setActiveConfig, setActiveAdditionalConfig, togglePunctuation, toggleNumber } = activeConfigSlice.actions

export default activeConfigSlice.reducer
