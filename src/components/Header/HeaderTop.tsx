import { HeaderProps } from '../../types/Header'
import { BurgerMenu } from '../BurgerMenu'
import { Location } from '../Location'
import { Logo } from '../Logo'
import { Notification } from '../Notification'

import { useMediaQuery } from '../../hooks/useMediaQuery'
import styles from './Header.module.scss'

export const HeaderTop: React.FC<HeaderProps> = ({ isOpen, toggleOpen }) => {
	const isDesktop = useMediaQuery('(min-width: 1024px)')

	return (
		<div className={styles.top}>
			<div className={styles.container}>
				<div className={styles.inner}>
					<Logo />
					{isDesktop && <Location />}
					{!isOpen && <Notification />}
					<BurgerMenu isOpen={isOpen} toggleOpen={toggleOpen} />
				</div>
			</div>
		</div>
	)
}
