import styles from "./Configbar.module.sass"
import {
	FaAt,
	FaHashtag,
	FaClock,
	FaFont,
	FaQuoteLeft,
	FaWrench,
} from "react-icons/fa"
import { IoMdSettings } from "react-icons/io"
import { setActiveConfig } from "../../store/slices/activeConfig"
import { useAppDispatch, useAppSelector } from "../../store/hooks"

export type ConfigbarProps = {
	setIsConfigbarVisible: Function
}

export const menus = [
	{
		type: "icon",
		icon: <FaAt />,
		label: "punctuation",
	},
	{
		type: "icon",
		icon: <FaHashtag />,
		label: "numbers",
	},
	{
		type: "divider",
	},
	{
		type: "icon",
		icon: <FaClock />,
		label: "time",
	},
	{
		type: "icon",
		icon: <FaFont />,
		label: "word",
	},
	{
		type: "icon",
		icon: <FaQuoteLeft />,
		label: "quote",
	},
	{
		type: "icon",
		icon: <FaWrench />,
		label: "custom",
	},
]

export default function Configbar({ setIsConfigbarVisible }: ConfigbarProps) {
	const { activeConfig } = useAppSelector((state) => state)
	const dispatch = useAppDispatch()

	return (
		<div className={styles.configbarContainer}>
			<div className={styles.configbar}>
				{menus.map((val, idx) => {
					return val.type === "icon" ? (
						<div
							className={`${styles.configbarItem} ${
								activeConfig.value === val.label
									? styles.configbarItemActive
									: ""
							}`}
							key={idx}
							onClick={() => dispatch(setActiveConfig(val.label as string))}>
							<div className={styles.itemIcon}>{val.icon}</div>
							<div className={styles.itemLabel}>{val.label}</div>
						</div>
					) : (
						<div className={styles.divider} key={idx}></div>
					)
				})}
			</div>
			<div className={styles.configbarMobile}>
				<div
					className={styles.configbarItem}
					onClick={() => setIsConfigbarVisible((oldValue: any) => !oldValue)}>
					<div className={styles.itemIcon}>
						<IoMdSettings />
					</div>
					<div className={styles.itemLabel}>Test Settings</div>
				</div>
			</div>
		</div>
	)
}
