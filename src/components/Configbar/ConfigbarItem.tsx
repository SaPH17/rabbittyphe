import { AdditionalConfig } from '../../models/config'
import { useAppSelector } from '../../store/hooks'
import styles from './ConfigbarItem.module.sass'

export type ConfigbarItemProps = {
  label: string
  icon?: JSX.Element
  additionalConfig?: AdditionalConfig[]
  onClickFunction: Function
}

export default function ConfigbarItem({
  icon = <></>,
  label,
  additionalConfig = [],
  onClickFunction,
}: ConfigbarItemProps) {
  const { activeConfig } = useAppSelector((state) => state)

  return (
    <div
      className={`${styles.configbarItem} ${
        activeConfig.value === label ? styles.configbarItemActive : ''
      }`}
      onClick={() => onClickFunction()}>
      <div className={styles.itemIcon}>{icon}</div>
      <div className={styles.itemLabel}>{label}</div>
    </div>
  )
}
