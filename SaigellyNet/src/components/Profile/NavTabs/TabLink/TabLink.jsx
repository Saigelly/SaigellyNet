import { NavLink } from "react-router-dom";
import s from "./TabLink.module.css"


const TabLink = ({item}) => {
      
    return (
    <li className={s.item}>
        <NavLink to={item.path} className={({isActive}) => isActive ? `${s.link} ${s.active}` : s.link}>
            {item.label}
        </NavLink>
    </li>
    )
}


export default TabLink;