import { NavLink } from "react-router-dom"
import s from "./NavItem.module.css"


const NavItem = (props) => {
    return (
        <li className={s.menuItem}>
            <NavLink to={props.item.isPersonal
                ? `/${props.item.path}/${props.userId}`
                : `/${props.item.path}`}
                className={s.menuLink}
            >
                <img src={`/src/assets/images/sidebar/${props.item.iconSrc}.png`} alt={props.iconSrc} />
                {props.isLarge
                    ? <span className={s.menuTitle}>{props.item.title}</span>
                    : <div className={s.menuSmallTitle}>{props.item.title}</div>}
            </NavLink>
        </li>
    )
}

export default NavItem;