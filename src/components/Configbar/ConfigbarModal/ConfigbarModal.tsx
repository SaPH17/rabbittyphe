import styles from "./ConfigbarModal.module.sass"
import { menus } from "../Configbar"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { setActiveConfig } from "../../../store/slices/activeConfig"

export type ConfigbarModalProps = {
	isVisible: boolean
	setIsConfigbarVisible: Function
}

export default function ConfigbarModal({
	isVisible,
	setIsConfigbarVisible,
}: ConfigbarModalProps) {
	const { activeConfig } = useAppSelector((state) => state)
	const dispatch = useAppDispatch()

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
								<div
									className={`${styles.configbarItem} ${
										activeConfig.value === val.label
											? styles.configbarItemActive
											: ""
									}`}
									onClick={() => dispatch(setActiveConfig(val.label as string))}
									key={idx}>
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
