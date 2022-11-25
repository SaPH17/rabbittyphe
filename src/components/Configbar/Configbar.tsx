import styles from './Configbar.module.sass'
import {
    FaAt,
    FaHashtag,
    FaClock,
    FaFont,
    FaQuoteLeft,
    FaWrench,
} from 'react-icons/fa'

export default function Configbar() {
    const menus = [
        {
            type: 'icon',
            icon: <FaAt />,
            label: 'punctuation',
        },
        {
            type: 'icon',
            icon: <FaHashtag />,
            label: 'numbers',
        },
        {
            type: 'divider',
        },
        {
            type: 'icon',
            icon: <FaClock />,
            label: 'time',
        },
        {
            type: 'icon',
            icon: <FaFont />,
            label: 'word',
        },
        {
            type: 'icon',
            icon: <FaQuoteLeft />,
            label: 'quote',
        },
        {
            type: 'icon',
            icon: <FaWrench />,
            label: 'custom',
        },
    ]

    return (
        <div className={styles.configbarContainer}>
            <div className={styles.configbar}>
                {menus.map((val, idx) => {
                    return val.type === 'icon' ? (
                        <div className={styles.configbarItem}>
                            <div className={styles.itemIcon}>{val.icon}</div>
                            <div className={styles.itemLabel}>{val.label}</div>
                        </div>
                    ) : (
                        <div className={styles.divider}></div>
                    )
                })}
            </div>
        </div>
    )
}
