import s from "./StatsItem.module.css"

const StatsItem = (props) => {
    return (
        <li className={s.item}>
            <span className={s.text}>{props.stat.text}</span>
            <span className={s.value}>{props.stat.value}</span>
        </li>
    )
}

export default StatsItem;