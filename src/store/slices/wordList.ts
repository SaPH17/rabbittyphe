import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type WordListState = {
    word: string
}

const initialState: WordListState = {
    word: ''
}

export const wordListSlice = createSlice({
  name: 'wordList',
  initialState,
  reducers: {
    setWordList: (state, action : PayloadAction<string>) => {
        state.word = action.payload
    }
  },
})

export const { setWordList } = wordListSlice.actions

export default wordListSlice.reducer
