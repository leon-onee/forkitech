import { HeaderProps } from '../../types/Header'
import styles from './BurgerMenu.module.scss'
import CloseIcon from '/src/utils/assets/svg/close.svg'
import HamburgerIcon from '/src/utils/assets/svg/hamburger-icon.svg'

export const BurgerMenu: React.FC<HeaderProps> = ({ isOpen, toggleOpen }) => {
	return (
		<button className={styles.btn} onClick={toggleOpen}>
			{isOpen ? <CloseIcon /> : <HamburgerIcon />}
		</button>
	)
}
