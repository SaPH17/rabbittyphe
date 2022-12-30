import styles from './Navbar.module.sass'
import { FaKeyboard, FaCrown, FaRegUser } from 'react-icons/fa'

type NavbarProps = {
	setIsLeaderboardsVisible: Function
}

export default function Navbar({ setIsLeaderboardsVisible }: NavbarProps) {
	return (
		<div className={styles.navbarContainer}>
			<div className={styles.logo}>rabbittyphe</div>
			<div className={styles.navLinks}>
				<ul>
					<li className={styles.linkItem}>
						<FaKeyboard></FaKeyboard>
					</li>
					<li className={styles.linkItem} onClick={() => setIsLeaderboardsVisible((v: boolean) => !v)}>
						<FaCrown
							style={{
								marginBottom: '0.2em',
							}}></FaCrown>
					</li>
				</ul>
			</div>
			{/* <div className={`${styles.navLinks} ${styles.secondNavLinks}`}>
        <ul>
          <li className={styles.linkItem}>
            <FaRegUser></FaRegUser>
          </li>
        </ul>
      </div> */}
		</div>
	)
}
