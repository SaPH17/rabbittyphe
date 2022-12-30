import { useState } from 'react'
import styles from './SaveResultForm.module.sass'

type SaveResultFormProps = {
	onSaveResultFunction: Function
	onCancelFunction: Function
}

export default function SaveResultForm({ onSaveResultFunction, onCancelFunction }: SaveResultFormProps) {
	const [username, setUsername] = useState<string>('')

	return (
		<div className={styles.formContainer}>
			<div className={styles.title}>information</div>
			<div className={styles.inputContainer}>
				<input
					className={styles.inputText}
					type='text'
					placeholder='username'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<button className={styles.saveButton} onClick={() => onSaveResultFunction(username)}>
					Save Result
				</button>
				<button className={styles.saveButton} onClick={() => onCancelFunction()}>
					Cancel
				</button>
			</div>
		</div>
	)
}
