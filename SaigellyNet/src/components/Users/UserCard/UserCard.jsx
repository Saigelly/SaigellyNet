import s from "./UserCard.module.css"

const UserCard = ({ userData, follow, unfollow }) => {

    return (
        <li className={s.item}>
            {/* Добавиьт бэккграунд к аватарке */}
            <div className={s.avatar}>
                <a href="#">
                    <img src={userData.avatarURL} />
                </a>
            </div>
            <div className={s.userInfo}>
                <p className={s.userName}>
                    {`${userData.name.firstName} ${userData.name.lastName}`}
                </p>
                <h3 className={s.status}>
                    {userData.status}
                </h3>
                <p className={s.location}>
                    {`${userData.location.cityName}, ${userData.location.country}`}
                </p>
            </div>
            <div className={s.buttons}>

                {userData.followed
                    ? <button className={`${s.btn} ${s.btn_follow}`}
                        onClick={() => unfollow(userData.id)}
                    >Подписаться</button>
                    : <button className={`${s.btn} ${s.btn_unfollow}`}
                        onClick={() => follow(userData.id)}

                    >Отписаться</button>
                }
            </div>
        </li>
    )
}

export default UserCard;