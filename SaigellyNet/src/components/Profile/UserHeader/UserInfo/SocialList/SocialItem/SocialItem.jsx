import s from "./SocialItem.module.css"

const SocialItem = ({ item }) => {
    return (
        <li className={s.item}>
            <a href={item.link} className={s.link}>
                <img src={item.imgSrc} alt={item.imgAlt} className={s.icon} />
            </a>
        </li>
    )
}

export default SocialItem;