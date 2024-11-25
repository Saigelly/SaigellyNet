import { NavLink } from "react-router-dom";
import s from "./TabLink.module.css"


const TabLink = (props) => {
      
    return (
    <li className={s.item}>
        <NavLink to={`/profile/${props.userID}/${props.item.path}`} className={({isActive}) => isActive ? `${s.link} ${s.active}` : s.link}>
            {props.item.label}
        </NavLink>
    </li>
    )
}


export default TabLink;