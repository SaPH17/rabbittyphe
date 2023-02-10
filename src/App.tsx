import styles from './App.module.sass'
import Navbar from './components/Navbar/Navbar'
import Configbar from './components/Configbar/Configbar'
import ConfigbarModal from './components/Configbar/ConfigbarModal/ConfigbarModal'
import { useEffect, useState } from 'react'
import Test from './components/Test/Test'
import { appendWord, generateWord } from './helpers/wordHelper'
import { useAppDispatch, useAppSelector } from './store/hooks'
import {
	appendTypedWord,
	deleteTypedWord,
	setExtraWord,
	appendTypedHistory,
	popTypedHistory,
	resetTest,
	setWordList,
} from './store/slices/word'
import { getLastElement } from './helpers/arrayHelper'
import { decrementTimer, incrementTimer, setTimer, setTimerId, setTotalWordTyped } from './store/slices/test'
import Result from './components/Result/Result'
import LeaderboardsModal from './components/LeaderboardsModal/LeaderboardsModal'
import { setLeaderboards } from './store/slices/leaderboards'

function App() {
	const [isConfigbarVisible, setIsConfigbarVisible] = useState(false)
	const [isLeaderboardsVisible, setIsLeaderboardsVisible] = useState(false)
	const [isTestFinished, setIsTestFinished] = useState(false)

	const {
		activeConfig: { value, activeAdditionalConfig },
		wordList: { typedWord, word, extraWord, typedHistory },
		test: { timer, timerId },
		leaderboards: { leaderboards },
	} = useAppSelector((state) => state)
	const typedWordArray = typedWord.split(' ')
	const dispatch = useAppDispatch()

	const initializeWord = async () => {
		const str = await generateWord(value, activeAdditionalConfig)
		dispatch(resetTest(str))
		setIsTestFinished(false)
		if (timerId) {
			clearInterval(timerId)
			dispatch(setTimerId(null))
		}
	}

	useEffect(() => {
		initializeWord()
	}, [dispatch, value, activeAdditionalConfig])

	useEffect(() => {
		dispatch(setLeaderboards(JSON.parse(localStorage.getItem('leaderboards') ?? '[]')))
	}, [])

	useEffect(() => {
		if (leaderboards.length > 0) {
			localStorage.setItem('leaderboards', JSON.stringify(leaderboards))
		}
	}, [leaderboards])

	const startTimeTest = async () => {
		dispatch(setTimer(parseInt(activeAdditionalConfig)))

		const id = setInterval(() => {
			dispatch(decrementTimer())
		}, 1000)
		dispatch(setTimerId(id))
	}

	const startWordTest = async () => {
		dispatch(setTimer(0))
		dispatch(setTotalWordTyped(0))

		const id = setInterval(() => {
			dispatch(incrementTimer())
		}, 1000)
		dispatch(setTimerId(id))
	}

	useEffect(() => {
		document.onkeydown = (e) => {
			const key = e.key
			if (isTestFinished) {
				return
			}

			if (key === ' ') {
				dispatch(appendTypedHistory(extraWord))
				dispatch(setExtraWord(''))
				dispatch(appendTypedWord(key))
				if (value === 'word' || value === 'quote') {
					dispatch(setTotalWordTyped(typedWordArray.length))
				}
			} else if (key.length === 1) {
				if (!timerId) {
					if (value === 'time') {
						startTimeTest()
					} else if (value === 'word' || value === 'quote') {
						startWordTest()
					}
				}

				if (word[typedWordArray.length - 1].length > getLastElement(typedWordArray).length) {
					dispatch(appendTypedWord(key))
				} else {
					dispatch(setExtraWord(extraWord + key))
				}
			} else if (key === 'Backspace') {
				if (typedWord.length === 0) {
					return
				}

				if (getLastElement(typedWordArray).length === 0) {
					dispatch(setExtraWord(getLastElement(typedHistory)))
					dispatch(popTypedHistory())
					dispatch(deleteTypedWord())
				} else if (extraWord.length === 0) {
					dispatch(deleteTypedWord())
				} else {
					dispatch(setExtraWord(extraWord.slice(0, -1)))
				}
			}

			document.getElementsByClassName('word')[typedWordArray.length]?.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
			})
		}

		return () => {
			document.onkeydown = null
		}
	})

	const checkTestFinished = () => {
		if (value === 'time' && !timer) {
			return true
		}
		if (
			(value === 'word' || value === 'quote') &&
			typedWordArray.length === word.length &&
			getLastElement(typedWordArray) === getLastElement(word)
		) {
			return true
		}

		return false
	}

	const loadMoreWords = async () => {
		const words = await appendWord(word)
		dispatch(setWordList([...word, ...words]))
	}

	useEffect(() => {
		if (checkTestFinished() && timerId) {
			clearInterval(timerId)
			dispatch(setTimerId(null))
			setIsTestFinished(true)
		}
		if (typedWordArray.length >= word.length / 2 && value === 'time') {
			loadMoreWords()
		}
	}, [dispatch, timerId, timer, typedWordArray])

	return (
		<>
			<ConfigbarModal isVisible={isConfigbarVisible} setIsConfigbarVisible={setIsConfigbarVisible} />
			<LeaderboardsModal isVisible={isLeaderboardsVisible} setIsVisible={setIsLeaderboardsVisible} />
			<div className={styles.app}>
				<div></div>
				<div className={styles.appContainer}>
					<Navbar setIsLeaderboardsVisible={setIsLeaderboardsVisible} />
					<Configbar setIsConfigbarVisible={setIsConfigbarVisible} />
					{isTestFinished ? <Result initializeWord={initializeWord} /> : <Test initializeWord={initializeWord} />}
				</div>
				<div></div>
			</div>
		</>
	)
}

export default App
