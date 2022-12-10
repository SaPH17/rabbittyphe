import styles from "./Test.module.sass"
import { FaRedo } from "react-icons/fa"
import { useAppSelector } from "../../store/hooks"

export default function Test() {
	const { word } = useAppSelector((state) => state.wordList)
	const wordArray = word.split(" ")

	return (
		<div className={styles.testContainer}>
			<div className={styles.wordWrapper}>
				{wordArray.map((val, idx) => {
					return (
						<div className={styles.word} key={`${idx}}`}>
							{val.split("").map((val, idx2) => {
								return <span key={`${idx}-${idx2}`}>{val}</span>
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
