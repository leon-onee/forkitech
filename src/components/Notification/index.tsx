/// <reference types="vite-plugin-svgr/client" />
import cn from 'classnames'
import styles from './Notification.module.scss'
import NotificationIcon from '/src/utils/assets/svg/notification-bell.svg?react'

export const Notification = () => {
	return (
		<div className={cn(styles.icon, styles.active)}>
			<NotificationIcon className={styles.img} />
		</div>
	)
}
