import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type WordListState = {
    word: string
    typedWord: string
}

const initialState: WordListState = {
    word: '',
    typedWord: ''
}

export const wordListSlice = createSlice({
  name: 'wordList',
  initialState,
  reducers: {
    setWordList: (state, action : PayloadAction<string>) => {
        state.word = action.payload
    },
    appendTypedWord: (state, action : PayloadAction<string>) => {
      state.typedWord += action.payload
    },
    deleteTypedWord: (state) => {
      state.typedWord = state.typedWord.slice(0, -1)
    }
  },
})

export const { setWordList, appendTypedWord, deleteTypedWord } = wordListSlice.actions

export default wordListSlice.reducer
