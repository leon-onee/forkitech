import cn from 'classnames'
import { HeaderProps } from '../../types/Header'
import { Location } from '../Location'
import styles from './Header.module.scss'

const routes = [
	{
		title: 'Преимущества Tele2',
		href: '#',
	},
	{
		title: 'Тарифы',
		href: '#',
	},
	{
		title: 'Акции и спецпредложения',
		href: '#',
	},
	{
		title: 'Промотариф Tele2',
		href: '#',
	},
	{
		title: 'Технология eSIM',
		href: '#',
	},
	{
		title: 'Подключение нового абонента',
		href: '#',
	},
]

export const HeaderBottom: React.FC<HeaderProps> = ({ isOpen }) => {
	return (
		<div className={cn(styles.bottom, { [styles.show]: isOpen })}>
			<div className={styles.container}>
				<div className={styles.nav}>
					<ul>
						{routes.map((item, index) => (
							<li
								className={cn({
									[styles.active]: index === 0,
								})}
								key={index}
							>
								<a href={item.href}>{item.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			{isOpen && <Location />}
		</div>
	)
}
