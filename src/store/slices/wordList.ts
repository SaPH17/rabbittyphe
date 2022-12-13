import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RefObject } from 'react'

type WordListState = {
    word: string
    typedWord: string
    activeWordRef: RefObject<HTMLDivElement> | null
}

const initialState: WordListState = {
    word: '',
    typedWord: '',
    activeWordRef: null
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
    },
    resetTypedWord: (state) => {
      state.typedWord = ''
    },
    setActiveWordRef: (state, action : PayloadAction<any>) => {
      state.activeWordRef = action.payload
    }
  },
})

export const { setWordList, appendTypedWord, resetTypedWord, deleteTypedWord, setActiveWordRef } = wordListSlice.actions

export default wordListSlice.reducer
