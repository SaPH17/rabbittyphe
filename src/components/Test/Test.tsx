import styles from './Test.module.sass'
import { FaRedo } from 'react-icons/fa'
import { useAppSelector } from '../../store/hooks'

type TestProps = {
	initializeWord: Function
}

export default function Test({ initializeWord }: TestProps) {
	const {
		wordList: { typedWord, word, extraWord, typedHistory },
		test: { timer, timerId, totalWordTyped },
		activeConfig: { value },
	} = useAppSelector((state) => state)
	const typedWordArray = typedWord.split(' ')

	return (
		<div className={styles.testContainer}>
			{value === 'time' && timerId && <div className={styles.timer}>{timer}</div>}
			{(value === 'word' || value === 'quote') && timerId && (
				<div className={styles.timer}>
					{totalWordTyped}/{word.length}
				</div>
			)}
			<div className={styles.wordWrapper}>
				{word.map((val, wordIdx) => {
					const isActive = wordIdx === typedWordArray.length - 1

					return (
						<div
							className={`${styles.word} word ${
								wordIdx < typedWordArray.length - 1 && val !== typedWordArray[wordIdx] + typedHistory[wordIdx]
									? styles.wrongWord
									: ''
							}`}
							key={`${wordIdx}}`}>
							{isActive && (
								<span
									className={styles.caret}
									style={{
										left: `${typedWordArray[wordIdx].length + extraWord.length}ch`,
									}}></span>
							)}
							{val.split('').map((val, charIdx) => {
								let className = ''
								if (typedWordArray.length > wordIdx && typedWordArray[wordIdx].length > charIdx) {
									if (typedWordArray[wordIdx][charIdx] === val) {
										className = styles.correct
									} else {
										className = styles.wrong
									}
								}

								return (
									<span className={`${className}`} key={`${wordIdx}-${charIdx}`}>
										{val}
									</span>
								)
							})}
							{isActive
								? extraWord.split('').map((val, charIdx) => {
										return (
											<span key={`extra-word-${wordIdx}-${charIdx}`} className={styles.extraWord}>
												{val}
											</span>
										)
								  })
								: typedHistory[wordIdx]
								? typedHistory[wordIdx].split('').map((val, charIdx) => {
										return (
											<span key={`extra-word-${wordIdx}-${charIdx}`} className={styles.extraWord}>
												{val}
											</span>
										)
								  })
								: ''}
						</div>
					)
				})}
			</div>
			<div className={styles.buttonContainer}>
				<div className={styles.restartButton} onClick={() => initializeWord()} data-tooltip={'Restart Test'}>
					<FaRedo />
				</div>
			</div>
		</div>
	)
}
