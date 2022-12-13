import styles from './Test.module.sass'
import { FaRedo } from 'react-icons/fa'
import { useAppSelector } from '../../store/hooks'
import { useRef } from 'react'
type TestProps = {
	initializeWord: Function
}

export default function Test({ initializeWord }: TestProps) {
	const { word, typedWord } = useAppSelector((state) => state.wordList)
	const activeWord = useRef<HTMLDivElement>(null)
	const wordArray = word.split(' ')
	const typedWordArray = typedWord.split(' ')

	return (
		<div className={styles.testContainer}>
			<div className={styles.wordWrapper}>
				{wordArray.map((val, wordIdx) => {
					const isActive = wordIdx === typedWordArray.length - 1

					return (
						<div
							className={`${styles.word} word`}
							key={`${wordIdx}}`}
							ref={isActive ? activeWord : null}>
							{isActive && (
								<span
									className={styles.caret}
									style={{
										left: `${typedWordArray[wordIdx].length}ch`,
									}}></span>
							)}
							{val.split('').map((val, charIdx) => {
								let className = ''
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
					data-tooltip={'Restart Test'}>
					<FaRedo />
				</div>
			</div>
		</div>
	)
}
