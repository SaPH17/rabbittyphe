import styles from './Configbar.module.sass'
import { IoMdSettings } from 'react-icons/io'
import ConfigbarItem from './ConfigbarItem'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { testConfig } from '../../constants/testConfig'
import { AdditionalConfig } from '../../models/config'
import { setActiveConfig } from '../../store/slices/activeConfig'

export type ConfigbarProps = {
  setIsConfigbarVisible: Function
}

export default function Configbar({ setIsConfigbarVisible }: ConfigbarProps) {
  const { activeConfig } = useAppSelector((state) => state)
  const dispatch = useAppDispatch()

  return (
    <div className={styles.configbarContainer}>
      <div className={styles.configbar}>
        {testConfig.map((val, idx) => {
          return val.type === 'icon' ? (
            <ConfigbarItem
              icon={val.icon as JSX.Element}
              label={val.label as string}
              additionalConfig={val.additionalConfig as AdditionalConfig[]}
              onClickFunction={() => {
                dispatch(
                  setActiveConfig({
                    value: val.label as string,
                    activeAdditionalConfig:
                      val.additionalConfig?.at(0)?.label ?? '',
                    additionalConfig:
                      val.additionalConfig as AdditionalConfig[],
                  })
                )
              }}
            />
          ) : (
            <div className={styles.divider} key={idx}></div>
          )
        })}
        {activeConfig.additionalConfig.length > 0 && (
          <>
            <div className={styles.divider}></div>
            {activeConfig.additionalConfig.map((val, idx) => (
              <ConfigbarItem
                onClickFunction={() => {}}
                label={val.label as string}
              />
            ))}
          </>
        )}
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
