import styles from "./App.module.sass"
import Navbar from "./components/Navbar/Navbar"
import Configbar from "./components/Configbar/Configbar"
import ConfigbarModal from "./components/Configbar/ConfigbarModal/ConfigbarModal"
import { useEffect, useState } from "react"
import Test from "./components/Test/Test"
import { generateWord } from "./helpers/wordHelper"
import { useAppDispatch, useAppSelector } from "./store/hooks"
import { setWordList } from "./store/slices/wordList"

function App() {
	const [configbarVisible, setIsConfigbarVisible] = useState(false)
	const { value, activeAdditionalConfig } = useAppSelector(
		(state) => state.activeConfig
	)
	const dispatch = useAppDispatch()

	useEffect(() => {
		const initializeWord = async () => {
			const str = await generateWord(value, activeAdditionalConfig)
			dispatch(setWordList(str))
		}

		initializeWord()
	}, [dispatch, value, activeAdditionalConfig])

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
					<Test />
				</div>
				<div></div>
			</div>
		</>
	)
}

export default App
