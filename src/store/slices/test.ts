import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type TestState = {
	timer: number
	timerId: NodeJS.Timer | null
	totalWordTyped: number
}

const initialState: TestState = {
	timer: 0,
	timerId: null,
	totalWordTyped: 0,
}

export const testSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		setTimer: (state, action: PayloadAction<number>) => {
			state.timer = action.payload
		},
		setTimerId: (state, action: PayloadAction<NodeJS.Timer | null>) => {
			state.timerId = action.payload
		},
		decrementTimer: (state) => {
			state.timer = state.timer - 1
		},
		incrementTimer: (state) => {
			state.timer = state.timer + 1
		},
		setTotalWordTyped: (state, action: PayloadAction<number>) => {
			state.totalWordTyped = action.payload
		},
	},
})

export const { setTimer, setTimerId, decrementTimer, incrementTimer, setTotalWordTyped } = testSlice.actions

export default testSlice.reducer
