import styles from "./ConfigbarModal.module.sass"
import { menus } from "../Configbar"

export type ConfigbarModalProps = {
	isVisible: boolean
	setIsConfigbarVisible: Function
}

export default function ConfigbarModal({
	isVisible,
	setIsConfigbarVisible,
}: ConfigbarModalProps) {
	return (
		<>
			{isVisible && (
				<div
					className={styles.configbarModalContainer}
					onClick={() => {
						setIsConfigbarVisible((val: any) => !val)
					}}>
					<div
						className={styles.configbarModal}
						onClick={(e) => e.stopPropagation()}>
						{menus.map((val, idx) => {
							return val.type === "icon" ? (
								<div className={`${styles.configbarItem}`} key={idx}>
									<div className={styles.itemLabel}>{val.label}</div>
								</div>
							) : (
								<div className={styles.divider} key={idx}></div>
							)
						})}
					</div>
				</div>
			)}
		</>
	)
}
