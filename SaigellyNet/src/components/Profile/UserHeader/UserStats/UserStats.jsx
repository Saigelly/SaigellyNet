import StatsItem from "./StatsItem/StatsItem";
import s from "./UserStats.module.css"

const UserStats = ({ statsValue }) => {
    return (
        <div className={s.stats}>
            <ul className={s.list}>
                {statsValue.map(stat => <StatsItem stat={stat} />)}
            </ul>
        </div>
    )
}

export default UserStats;