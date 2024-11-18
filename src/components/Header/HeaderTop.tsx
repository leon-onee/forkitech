import { HeaderProps } from '../../types/Header'
import { BurgerMenu } from '../BurgerMenu'
import { Location } from '../Location'
import { Logo } from '../Logo'
import { Notification } from '../Notification'

import styles from './Header.module.scss'

type HeaderTopsProps = HeaderProps & {
	isDesktop: boolean
}

export const HeaderTop: React.FC<HeaderTopsProps> = ({
	isOpen,
	toggleOpen,
	isDesktop,
}) => {
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
