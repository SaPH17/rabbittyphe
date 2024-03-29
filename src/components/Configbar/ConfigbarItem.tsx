import styles from "./ConfigbarItem.module.sass"

export type ConfigbarItemProps = {
	isActive: boolean
	label: string
	icon?: JSX.Element
	onClickFunction: Function
}

export default function ConfigbarItem({
	isActive,
	icon = <></>,
	label,
	onClickFunction,
}: ConfigbarItemProps) {
	return (
		<div
			className={`${styles.configbarItem} ${
				isActive ? styles.configbarItemActive : ""
			}`}
			onClick={() => onClickFunction()}>
			<div className={styles.itemIcon}>{icon}</div>
			<div className={styles.itemLabel}>{label}</div>
		</div>
	)
}
