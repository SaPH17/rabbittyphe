import styles from "./App.module.sass"
import Navbar from "./components/Navbar/Navbar"
import Configbar from "./components/Configbar/Configbar"
import ConfigbarModal from "./components/Configbar/ConfigbarModal/ConfigbarModal"
import { useEffect, useState } from "react"
import Test from "./components/Test/Test"
import { generateWord } from "./helpers/wordHelper"
import { useAppDispatch, useAppSelector } from "./store/hooks"
import {
	setWordList,
	appendTypedWord,
	deleteTypedWord,
} from "./store/slices/wordList"

function App() {
	const [configbarVisible, setIsConfigbarVisible] = useState(false)
	const { value, activeAdditionalConfig } = useAppSelector(
		(state) => state.activeConfig
	)
	const { typedWord } = useAppSelector((state) => state.wordList)
	const dispatch = useAppDispatch()
	const initializeWord = async () => {
		const str = await generateWord(value, activeAdditionalConfig)
		dispatch(setWordList(str))
	}

	useEffect(() => {
		initializeWord()
	}, [dispatch, value, activeAdditionalConfig])

	useEffect(() => {
		document.onkeydown = (e) => {
			const key = e.key
			if (key.length === 1) {
				dispatch(appendTypedWord(key))
			} else if (key === "Backspace") {
				dispatch(deleteTypedWord())
			}
		}

		return () => {
			document.onkeydown = null
		}
	})

	console.log(typedWord)

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
