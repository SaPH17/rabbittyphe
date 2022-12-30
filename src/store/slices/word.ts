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
		setWordList: (state, action: PayloadAction<string[]>) => {
			state.word = action.payload
		},
		appendTypedWord: (state, action: PayloadAction<string>) => {
			state.typedWord += action.payload
		},
		deleteTypedWord: (state) => {
			state.typedWord = state.typedWord.slice(0, -1)
		},
		setExtraWord: (state, action: PayloadAction<string>) => {
			state.extraWord = action.payload
		},
		appendTypedHistory: (state, action: PayloadAction<string>) => {
			state.typedHistory.push(action.payload)
		},
		popTypedHistory: (state) => {
			if (state.typedHistory && state.typedHistory.length >= 0) {
				state.typedHistory.pop()
			}
		},
		resetTest: (state, action: PayloadAction<string[]>) => {
			state.word = action.payload
			state.typedWord = ''
			state.extraWord = ''
			state.typedHistory = []
		},
	},
})

export const {
	setWordList,
	appendTypedWord,
	deleteTypedWord,
	setExtraWord,
	appendTypedHistory,
	popTypedHistory,
	resetTest,
} = wordListSlice.actions

export default wordListSlice.reducer
