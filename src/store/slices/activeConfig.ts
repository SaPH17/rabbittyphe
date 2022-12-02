import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ActiveConfigState = {
    value: string
}

const initialState : ActiveConfigState = {
    value: 'time'
}

export const activeConfigSlice = createSlice({
    name: "activeConfig",
    initialState,
    reducers: {
        setActiveConfig: (state, action : PayloadAction<string>) => {
            state.value = action.payload
        }
    }
})

export const { setActiveConfig } = activeConfigSlice.actions

export default activeConfigSlice.reducer