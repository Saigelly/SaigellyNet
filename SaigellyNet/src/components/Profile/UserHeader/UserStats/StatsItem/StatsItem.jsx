import s from "./StatsItem.module.css"

const StatsItem = ({stat}) => {
    return (
        <li className={s.item}>
            <span className={s.text}>{stat.text}</span>
            <span className={s.value}>{stat.value}</span>
        </li>
    )
}

export default StatsItem;