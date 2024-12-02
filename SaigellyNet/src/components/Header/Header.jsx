import Logo from "../common/Logo/Logo";
import s from "./Header.module.css"

const Header = (props) => {
    return (
        <header className={s.header}>
            {/* <img src="https://banner2.cleanpng.com/20180425/soq/kisspng-logo-clip-art-5ae10d88490e92.4932963515246985042993.jpg" alt="" className="logo" /> */}
            {/* <nav className={s.nav}>
                <ul>
                    <li>Домашняя</li>
                    <li>Комьюнити</li>
                    <li>Страницы</li>
                </ul>
            </nav> */}
            <div className={s.content}>
                <Logo subClass={s.headerLogo}/>
                {!props.isAuth
                    ? <a href="/login" className={s.login}>Войти</a>
                    : <div className={s.login}>
                        <a href="">{props.login}</a>
                        <button onClick={props.logoutProfile}>Выйти</button>
                    </div>}
            </div>

        </header>
    )
}

export default Header;