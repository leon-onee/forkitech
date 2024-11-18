import cn from 'classnames'
import { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import { HeaderTop } from './HeaderTop'
import { HeaderBottom } from './HeaderBottom'

export const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleOpen = () => {
		setIsOpen(prev => !prev)
	}

	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : ''
		return () => {
			document.body.style.overflow = ''
		}
	}, [isOpen])

	return (
		<header className={cn(styles.header, { [styles.active]: isOpen })}>
			<HeaderTop isOpen={isOpen} toggleOpen={toggleOpen} />
			<HeaderBottom isOpen={isOpen} toggleOpen={toggleOpen} />
		</header>
	)
}
