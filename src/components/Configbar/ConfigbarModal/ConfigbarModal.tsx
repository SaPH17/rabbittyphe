import styles from "./ConfigbarModal.module.sass"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import {
	setActiveAdditionalConfig,
	setActiveConfig,
	toggleNumber,
	togglePunctuation,
} from "../../../store/slices/activeConfig"
import { testConfig } from "../../../constants/testConfig"
import { AdditionalConfig } from "../../../types/config"
import ConfigbarModalItem from "./ConfigbarModalItem"

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
						<ConfigbarModalItem
							isActive={activeConfig.isPunctuationEnabled}
							label={"punctuation"}
							onClickFunction={() => {
								dispatch(togglePunctuation(!activeConfig.isPunctuationEnabled))
							}}
						/>
						<ConfigbarModalItem
							isActive={activeConfig.isNumberEnabled}
							label={"numbers"}
							onClickFunction={() => {
								dispatch(toggleNumber(!activeConfig.isNumberEnabled))
							}}
						/>
						<div className={styles.divider}></div>
						{testConfig.map((val, idx) => (
							<ConfigbarModalItem
								key={idx}
								label={val.label}
								isActive={activeConfig.value === val.label}
								onClickFunction={() => {
									dispatch(
										setActiveConfig({
											value: val.label as string,
											activeAdditionalConfig: val.defaultAdditionalConfig,
											additionalConfig:
												val.additionalConfig as AdditionalConfig[],
										})
									)
								}}
							/>
						))}
						{activeConfig.additionalConfig.length > 0 && (
							<>
								<div className={styles.divider}></div>
								{activeConfig.additionalConfig.map((val, idx) => (
									<ConfigbarModalItem
										key={idx}
										isActive={activeConfig.activeAdditionalConfig === val.label}
										onClickFunction={() => {
											dispatch(setActiveAdditionalConfig(val.label))
										}}
										label={val.label as string}
									/>
								))}
							</>
						)}
					</div>
				</div>
			)}
		</>
	)
}
