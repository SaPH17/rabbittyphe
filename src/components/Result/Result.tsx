import { FaRedo, FaSave } from 'react-icons/fa'
import styles from './Result.module.sass'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { useState } from 'react'
import SaveResultForm from '../SaveResultForm/SaveResultForm'
import { setLeaderboards } from '../../store/slices/leaderboards'

type ResultProps = {
	initializeWord: Function
}

export default function Result({ initializeWord }: ResultProps) {
	const [isNameInputVisible, setIsNameInputVisible] = useState(false)
	const {
		activeConfig: { value, activeAdditionalConfig },
		wordList: { typedWord, word },
		test: { timer },
		leaderboards: { leaderboards },
	} = useAppSelector((state) => state)
	const dispatch = useAppDispatch()
	const typedWordArray = typedWord.split(' ')

	let correctChars = 0
	let correctWords = 0
	const spaces = typedWordArray.length
	const correct = typedWordArray.map((typedWord: string, idx: number) => typedWord === word[idx])
	correct.forEach((c, idx) => {
		if (c) {
			correctChars += word[idx].length
			correctWords++
		}
	})

	const time = value === 'time' ? parseInt(activeAdditionalConfig) : timer
	const userWpm = ((correctChars + spaces) * 60) / time / 5
	const acc = (correctWords / typedWordArray.length) * 100

	return isNameInputVisible ? (
		<SaveResultForm
			onSaveResultFunction={(username: string) => {
				dispatch(
					setLeaderboards([
						...leaderboards,
						{
							username: username,
							wpm: userWpm,
							accuracy: acc,
							type: value,
							value: activeAdditionalConfig,
							date: new Date().getTime(),
						},
					])
				)
				initializeWord()
			}}
			onCancelFunction={() => setIsNameInputVisible(false)}
		/>
	) : (
		<div className={styles.resultContainer}>
			<div className={styles.statsContainer}>
				<div className={styles.statsCard}>
					<div className={styles.statsLabel}>wpm</div>
					<div className={styles.statsData}>{Math.round(userWpm)}</div>
				</div>
				<div className={styles.statsCard}>
					<div className={styles.statsLabel}>acc</div>
					<div className={styles.statsData}>{Math.round(acc)}%</div>
				</div>
			</div>
			<div className={styles.statsCard}>
				<div className={styles.statsLabel}>test type</div>
				<div className={`${styles.statsData} ${styles.testTypeData}`}>
					{value} {activeAdditionalConfig}
				</div>
			</div>
			<div className={styles.buttonContainer}>
				<div
					className={`${styles.button} ${styles.saveButton}`}
					onClick={() => setIsNameInputVisible(true)}
					data-tooltip={'Save Test'}>
					<FaSave />
				</div>
				<div
					className={`${styles.button} ${styles.restartButton}`}
					onClick={() => initializeWord()}
					data-tooltip={'Restart Test'}>
					<FaRedo />
				</div>
			</div>
		</div>
	)
}
