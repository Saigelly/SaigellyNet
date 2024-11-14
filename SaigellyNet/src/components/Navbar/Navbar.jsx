import { Link, NavLink } from "react-router-dom"
import s from "./Navbar.module.css"

const Navbar = (props) => {
    const items = [
        { path: "/profile", text: "Профиль" },
        { path: "/dialogues", text: "Сообщения" },
        { path: "/news", text: "Новости" },
        { path: "/music", text: "Музыка" },
        { path: "/settings", text: "Настройки" },


    ]

    const NavItem = ({ item }) => {
        return (
            <li className={s.item}>
                <NavLink to={item.path}
                    className={({ isActive }) => isActive ? s.active : ""}
                >{item.text}</NavLink>
            </li>
        )
    }

    return (
        <nav className={s.nav}>
            <div className="burger">бургер</div>
            <ul className="nav__list">
                {items.map(item => <NavItem item={item} />)}
            </ul>
        </nav>
    )
}

export default Navbar;