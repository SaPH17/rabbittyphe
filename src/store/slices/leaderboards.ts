import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { LeaderboardItem } from '../../constants/leaderboardsItem'

type LeaderboardsState = {
	leaderboards: LeaderboardItem[]
}

const initialState: LeaderboardsState = {
	leaderboards: [],
}

export const leaderboardsSlice = createSlice({
	name: 'leaderboards',
	initialState,
	reducers: {
		setLeaderboards: (state, action: PayloadAction<LeaderboardItem[]>) => {
			state.leaderboards = action.payload
		},
	},
})

export const { setLeaderboards } = leaderboardsSlice.actions

export default leaderboardsSlice.reducer
