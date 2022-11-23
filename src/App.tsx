import styles from "./App.module.sass"
import Navbar from "./components/Navbar/Navbar"

function App() {
	return (
		<div className={styles.app}>
			<div></div>
			<div className={styles.appContainer}>
				<Navbar />
			</div>
			<div></div>
		</div>
	)
}

export default App
