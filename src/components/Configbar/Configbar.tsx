import styles from "./Configbar.module.sass"
import { IoMdSettings } from "react-icons/io"
import ConfigbarItem from "./ConfigbarItem"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { testConfig } from "../../constants/testConfig"
import { AdditionalConfig } from "../../types/config"
import {
	setActiveAdditionalConfig,
	setActiveConfig,
	togglePunctuation,
	toggleNumber,
} from "../../store/slices/activeConfig"
import { FaAt, FaHashtag } from "react-icons/fa"

export type ConfigbarProps = {
	setIsConfigbarVisible: Function
}

export default function Configbar({ setIsConfigbarVisible }: ConfigbarProps) {
	const { activeConfig } = useAppSelector((state) => state)
	const dispatch = useAppDispatch()

	return (
		<div className={styles.configbarContainer}>
			<div className={styles.configbar}>
				<ConfigbarItem
					isActive={activeConfig.isPunctuationEnabled}
					icon={<FaAt />}
					label={"punctuation"}
					onClickFunction={() => {
						dispatch(togglePunctuation(!activeConfig.isPunctuationEnabled))
					}}
				/>
				<ConfigbarItem
					isActive={activeConfig.isNumberEnabled}
					icon={<FaHashtag />}
					label={"numbers"}
					onClickFunction={() => {
						dispatch(toggleNumber(!activeConfig.isNumberEnabled))
					}}
				/>
				<div className={styles.divider}></div>
				{testConfig.map((val, idx) => (
					<ConfigbarItem
						key={idx}
						isActive={activeConfig.value === val.label}
						icon={val.icon as JSX.Element}
						label={val.label as string}
						onClickFunction={() => {
							dispatch(
								setActiveConfig({
									value: val.label as string,
									activeAdditionalConfig: val.defaultAdditionalConfig,
									additionalConfig: val.additionalConfig as AdditionalConfig[],
								})
							)
						}}
					/>
				))}
				{activeConfig.additionalConfig.length > 0 && (
					<>
						<div className={styles.divider}></div>
						{activeConfig.additionalConfig.map((val, idx) => (
							<ConfigbarItem
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
			<div className={styles.configbarMobile}>
				<ConfigbarItem
					isActive={false}
					onClickFunction={() =>
						setIsConfigbarVisible((oldValue: any) => !oldValue)
					}
					icon={<IoMdSettings />}
					label={"Test Settings"}
				/>
			</div>
		</div>
	)
}
