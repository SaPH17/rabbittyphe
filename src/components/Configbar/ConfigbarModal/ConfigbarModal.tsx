import styles from './ConfigbarModal.module.sass'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { setActiveConfig } from '../../../store/slices/activeConfig'
import { testConfig } from '../../../constants/testConfig'
import { AdditionalConfig } from '../../../models/config'

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

  console.log(activeConfig)

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
            {testConfig.map((val, idx) => {
              return val.type === 'icon' ? (
                <div
                  className={`${styles.configbarItem} ${
                    activeConfig.value === val.label
                      ? styles.configbarItemActive
                      : ''
                  }`}
                  onClick={() =>
                    dispatch(
                      setActiveConfig({
                        value: val.label as string,
                        activeAdditionalConfig:
                          val.additionalConfig?.at(0)?.label ?? 'qwe',
                        additionalConfig:
                          val.additionalConfig as AdditionalConfig[],
                      })
                    )
                  }
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
