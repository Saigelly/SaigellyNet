import s from "./Header.module.css"

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://banner2.cleanpng.com/20180425/soq/kisspng-logo-clip-art-5ae10d88490e92.4932963515246985042993.jpg" alt="" className="logo" />
            <nav className={s.nav}>
                <ul>
                    <li>Домашняя</li>
                    <li>Комьюнити</li>
                    <li>Страницы</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;