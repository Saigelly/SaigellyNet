import s from "./SocialItem.module.css"

const SocialItem = (props) => {
    return (
        <li className={s.item}>
            <a href={props.item[1]} className={s.link}>
                <img src={`./assets/images/${props.item[0]}.svg`} alt={props.item[0]} className={s.icon} />
            </a>
        </li>
    )
}

export default SocialItem;