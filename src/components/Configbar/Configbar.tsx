import styles from './Configbar.module.sass'
import { IoMdSettings } from 'react-icons/io'
import ConfigbarItem from './ConfigbarItem'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { testConfig } from '../../constants/testConfig'
import { AdditionalConfig } from '../../types/config'
import { setActiveAdditionalConfig, setActiveConfig } from '../../store/slices/activeConfig'

export type ConfigbarProps = {
	setIsConfigbarVisible: Function
}

export default function Configbar({ setIsConfigbarVisible }: ConfigbarProps) {
	const { activeConfig } = useAppSelector((state) => state)
	const dispatch = useAppDispatch()

	return (
		<div className={styles.configbarContainer}>
			<div className={styles.configbar}>
				{testConfig.map((val, idx) => (
					<ConfigbarItem
						key={`config-${idx}`}
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
								key={`additional-config-${idx}`}
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
					onClickFunction={() => setIsConfigbarVisible((oldValue: any) => !oldValue)}
					icon={<IoMdSettings />}
					label={'Test Settings'}
				/>
			</div>
		</div>
	)
}
