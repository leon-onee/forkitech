import cn from 'classnames'
import { useEffect, useState } from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import styles from './Header.module.scss'
import { HeaderBottom } from './HeaderBottom'
import { HeaderTop } from './HeaderTop'

export const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const isDesktop = useMediaQuery('(min-width: 1024px)')

	const toggleOpen = () => {
		setIsOpen(prev => !prev)
	}

	useEffect(() => {
		if (isDesktop) {
			setIsOpen(false)
		}
	}, [isDesktop])

	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : ''
		return () => {
			document.body.style.overflow = ''
		}
	}, [isOpen])

	return (
		<header className={cn(styles.header, { [styles.active]: isOpen })}>
			<HeaderTop
				isOpen={isOpen}
				toggleOpen={toggleOpen}
				isDesktop={isDesktop}
			/>
			<HeaderBottom isOpen={isOpen} toggleOpen={toggleOpen} />
		</header>
	)
}
