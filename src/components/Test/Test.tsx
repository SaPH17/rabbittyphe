import styles from "./Test.module.sass"
import { FaRedo } from "react-icons/fa"

export default function Test() {
	const word =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	const wordArray = word.split(" ")
	return (
		<div className={styles.testContainer}>
			<div className={styles.wordWrapper}>
				{wordArray.map((val, idx) => {
					return (
						<div className={styles.word}>
							{val.split("").map((val, idx) => {
								return <span>{val}</span>
							})}
						</div>
					)
				})}
			</div>
			<div className={styles.buttonContainer}>
				<div className={styles.restartButton} data-tooltip={"Restart Test"}>
					<FaRedo />
				</div>
			</div>
		</div>
	)
}
