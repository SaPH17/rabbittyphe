import styles from "./App.module.sass"
import Navbar from "./components/Navbar/Navbar"
import Configbar from "./components/Configbar/Configbar"
import ConfigbarModal from "./components/Configbar/ConfigbarModal/ConfigbarModal"
import { useState } from "react"
import Test from "./components/Test/Test"

function App() {
	const [configbarVisible, setIsConfigbarVisible] = useState(false)

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
