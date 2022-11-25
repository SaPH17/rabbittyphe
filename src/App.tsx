import styles from './App.module.sass'
import Navbar from './components/Navbar/Navbar'
import Configbar from './components/Configbar/Configbar'

function App() {
    return (
        <div className={styles.app}>
            <div></div>
            <div className={styles.appContainer}>
                <Navbar />
                <Configbar />
            </div>
            <div></div>
        </div>
    )
}

export default App
