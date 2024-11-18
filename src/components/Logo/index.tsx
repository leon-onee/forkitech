import styles from './Logo.module.scss'
import LogoIcon from '/src/utils/assets/svg/logo.svg'

export const Logo = () => {
	return (
		<div className={styles.logo}>
			<a href='/'>
				<LogoIcon />
			</a>
		</div>
	)
}
