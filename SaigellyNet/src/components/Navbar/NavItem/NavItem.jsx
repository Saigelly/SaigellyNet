import { NavLink } from "react-router-dom"
import s from "./NavItem.module.css"


const NavItem = ({ item }) => {
    return (
        <li className={s.item}>
            <NavLink to={item.path}
                className={({ isActive }) => isActive ? s.active : ""}
            >{item.text}</NavLink>
        </li>
    )
}


export default NavItem;