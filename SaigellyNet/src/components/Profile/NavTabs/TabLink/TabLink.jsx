import s from "./TabLink.module.css"


const TabLink = ({item}) => {
      
    return (
    <li className={s.item}>
        <a href={item.path} className={s.link}>
            {item.label}
        </a>
    </li>
    )
}


export default TabLink;