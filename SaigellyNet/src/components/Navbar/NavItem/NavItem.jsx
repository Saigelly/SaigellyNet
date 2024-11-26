import { NavLink } from "react-router-dom"
import s from "./NavItem.module.css"


const NavItem = (props) => {
    return (
        <li
            onClick={
                props.item.onclick
                    ? props.item.onclick
                    : null
            }
            className={s.item}>
            <NavLink to={props.item.isPersonal
                ? `/${props.item.path}/${props.userId}`
                : `/${props.item.path}`}
                className={({ isActive }) => isActive ? s.active : ""}
            >{props.item.text}</NavLink>
        </li>
    )
}


export default NavItem;