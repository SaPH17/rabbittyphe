import styles from "./Test.module.sass"
import { FaRedo } from "react-icons/fa"
import { useAppSelector } from "../../store/hooks"

type TestProps = {
	initializeWord: Function
}

export default function Test({ initializeWord }: TestProps) {
	const { word, typedWord } = useAppSelector((state) => state.wordList)
	const wordArray = word.split(" ")
	const typedWordArray = typedWord.split(" ")

	return (
		<div className={styles.testContainer}>
			<div className={styles.wordWrapper}>
				{wordArray.map((val, wordIdx) => {
					return (
						<div
							className={`${styles.word} ${
								wordIdx === typedWordArray.length - 1 ? "active" : ""
							}`}
							key={`${wordIdx}}`}>
							{val.split("").map((val, charIdx) => {
								let className = ""
								if (
									typedWordArray.length > wordIdx &&
									typedWordArray[wordIdx].length > charIdx
								) {
									if (typedWordArray[wordIdx][charIdx] === val) {
										className = styles.correct
									} else {
										className = styles.wrong
									}
								}

								return (
									<span
										className={`${className}`}
										key={`${wordIdx}-${charIdx}`}>
										{val}
									</span>
								)
							})}
						</div>
					)
				})}
			</div>
			<div className={styles.buttonContainer}>
				<div
					className={styles.restartButton}
					onClick={() => initializeWord()}
					data-tooltip={"Restart Test"}>
					<FaRedo />
				</div>
			</div>
		</div>
	)
}
