import React from 'react'
import styles from './Location.module.scss'
import PinIcon from '/src/utils/assets/svg/pin.svg'

export const Location: React.FC = () => {
	return (
		<button className={styles.root}>
			<div className={styles.icon}>
				<PinIcon />
			</div>
			<div className={styles.content}>Москва и область</div>
		</button>
	)
}
