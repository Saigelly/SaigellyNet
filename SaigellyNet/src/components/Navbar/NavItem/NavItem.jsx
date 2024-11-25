import { NavLink } from "react-router-dom"
import s from "./NavItem.module.css"


const NavItem = (props) => {
    return (
        <li className={s.item}>
            <NavLink to={props.item.path}
                className={({ isActive }) => isActive ? s.active : ""}
            >{props.item.text}</NavLink>
        </li>
    )
}


export default NavItem;