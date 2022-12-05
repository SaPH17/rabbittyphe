import styles from "./ConfigbarModalItem.module.sass"

export type ConfigbarItemProps = {
	isActive: boolean
	label: string
	onClickFunction: Function
}

export default function ConfigbarModalItem({
	isActive,
	label,
	onClickFunction,
}: ConfigbarItemProps) {
	return (
		<div
			className={`${styles.configbarItem} ${
				isActive ? styles.configbarItemActive : ""
			}`}
			onClick={() => {
				onClickFunction()
			}}>
			<div className={styles.itemLabel}>{label}</div>
		</div>
	)
}
