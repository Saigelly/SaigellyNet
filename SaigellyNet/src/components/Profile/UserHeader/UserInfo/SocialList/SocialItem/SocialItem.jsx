import s from "./SocialItem.module.css"

const SocialItem = (props) => {
    return (
        !props.item[1] 
        ? null
        : <li className={s.item}>
            <a href={props.item[1]} className={s.link}>
                <img src={`/src/assets/images/social/${props.item[0]}.svg`} alt={props.item[0]} className={s.icon} />
            </a>
        </li>
    )
}

export default SocialItem;