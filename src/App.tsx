import styles from './App.module.sass'
import Navbar from './components/Navbar/Navbar'
import Configbar from './components/Configbar/Configbar'
import ConfigbarModal from './components/Configbar/ConfigbarModal/ConfigbarModal'
import { useEffect, useState } from 'react'
import Test from './components/Test/Test'
import { generateWord } from './helpers/wordHelper'
import { useAppDispatch, useAppSelector } from './store/hooks'
import {
	setWordList,
	appendTypedWord,
	deleteTypedWord,
	resetTypedWord,
	setExtraWord,
	appendTypedHistory,
} from './store/slices/word'

function App() {
	const [configbarVisible, setIsConfigbarVisible] = useState(false)

	const {
		activeConfig: { value, activeAdditionalConfig },
		wordList: { typedWord, word, extraWord },
	} = useAppSelector((state) => state)
	const typedWordArray = typedWord.split(' ')
	const dispatch = useAppDispatch()

	const initializeWord = async () => {
		const str = await generateWord(value, activeAdditionalConfig)
		dispatch(setWordList(str))
		dispatch(resetTypedWord())
		dispatch(setExtraWord(''))
	}

	useEffect(() => {
		initializeWord()
	}, [dispatch, value, activeAdditionalConfig])

	useEffect(() => {
		document.onkeydown = (e) => {
			const key = e.key
			if (key === ' ') {
				dispatch(appendTypedHistory(extraWord))
				dispatch(setExtraWord(''))
				dispatch(appendTypedWord(key))
			} else if (key.length === 1) {
				if (
					word[typedWordArray.length - 1].length >
					typedWordArray[typedWordArray.length - 1].length
				) {
					dispatch(appendTypedWord(key))
				} else {
					dispatch(setExtraWord(extraWord + key))
				}
			} else if (key === 'Backspace') {
				if (extraWord.length === 0) {
					dispatch(deleteTypedWord())
				} else {
					dispatch(setExtraWord(extraWord.slice(0, -1)))
				}
			}
			console.log(extraWord)

			document
				.getElementsByClassName('word')
				[typedWordArray.length]?.scrollIntoView({
					behavior: 'smooth',
					block: 'center',
				})
		}

		return () => {
			document.onkeydown = null
		}
	})

	return (
		<>
			<ConfigbarModal
				isVisible={configbarVisible}
				setIsConfigbarVisible={setIsConfigbarVisible}
			/>
			<div className={styles.app}>
				<div></div>
				<div className={styles.appContainer}>
					<Navbar />
					<Configbar setIsConfigbarVisible={setIsConfigbarVisible} />
					<Test initializeWord={initializeWord} />
				</div>
				<div></div>
			</div>
		</>
	)
}

export default App
