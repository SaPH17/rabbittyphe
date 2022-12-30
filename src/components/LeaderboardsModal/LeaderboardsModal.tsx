import { FaCrown } from 'react-icons/fa'
import styles from './LeaderboardsModal.module.sass'
import moment from 'moment'
import { useAppSelector } from '../../store/hooks'

export type LeaderboardsModalProps = {
	isVisible: boolean
	setIsVisible: Function
}

export default function LeaderboardsModal({ isVisible, setIsVisible }: LeaderboardsModalProps) {
	const {
		leaderboards: { leaderboards },
	} = useAppSelector((state) => state)
	const result = [...leaderboards].sort((a, b) => b.wpm - a.wpm)

	return (
		<>
			{isVisible && (
				<div
					className={styles.modalContainer}
					onClick={() => {
						setIsVisible((val: any) => !val)
					}}>
					<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
						<div className={styles.title}>Leaderboards</div>
						<div className={styles.tableWrapper}>
							<table>
								<thead>
									<tr>
										<td style={{ width: '8%' }}>#</td>
										<td>name</td>
										<td style={{ width: '15%' }}>
											<div className={styles.alignRight}>
												<div>wpm</div>
												<div className={styles.subtitle}>accuracy</div>
											</div>
										</td>
										<td style={{ width: '15%' }}>
											<div className={styles.alignRight}>
												<div>type</div>
												<div className={styles.subtitle}>value</div>
											</div>
										</td>
										<td style={{ width: '22%', textAlign: 'right' }}>date</td>
									</tr>
								</thead>
								<tbody>
									{result.map((val, idx) => (
										<tr key={`leaderboard-${idx}`}>
											<td>{idx === 0 ? <FaCrown style={{ fontSize: '1rem' }} /> : idx + 1}</td>
											<td>{val.username}</td>
											<td>
												<div className={styles.alignRight}>
													<div>{Math.round(val.wpm)}</div>
													<div className={styles.subtitle}>{Math.round(val.accuracy)}%</div>
												</div>
											</td>
											<td>
												<div className={styles.alignRight}>
													<div>{val.type}</div>
													<div className={styles.subtitle}>{val.value}</div>
												</div>
											</td>
											<td>
												<div className={styles.alignRight}>
													<div>{moment(new Date(val.date)).format('D MMM YYYY')}</div>
													<div className={styles.subtitle}>{moment(new Date(val.date)).format('HH[:]mm')}</div>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
