import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type WordListState = {
    word: string[]
    typedWord: string
    extraWord: string
    typedHistory: string[]
}

const initialState: WordListState = {
    word: [],
    typedWord: '',
    extraWord: '',
    typedHistory: [],
}

export const wordListSlice = createSlice({
  name: 'wordList',
  initialState,
  reducers: {
    setWordList: (state, action : PayloadAction<string[]>) => {
        state.word = action.payload
    },
    appendTypedWord: (state, action : PayloadAction<string>) => {
      state.typedWord += action.payload
    },
    deleteTypedWord: (state) => {
      state.typedWord = state.typedWord.slice(0, -1)
    },
    resetTypedWord: (state) => {
      state.typedWord = ''
    },
    setExtraWord: (state, action: PayloadAction<string>) => {
      state.extraWord = action.payload
    },
    appendTypedHistory: (state, action: PayloadAction<string>) =>{
      state.typedHistory.push(action.payload)
    },
  },
})

export const { setWordList, appendTypedWord, resetTypedWord, deleteTypedWord, setExtraWord, appendTypedHistory } = wordListSlice.actions

export default wordListSlice.reducer
