import s from "./UserCard.module.css";
import userAvatar from "../../../assets/images/user.png";
import { NavLink } from "react-router-dom";

const UserCard = ({ userData, follow, unfollow }) => {
    return (

        <li className={s.item}>
            {/* Добавиьт бэккграунд к аватарке */}
            <NavLink to={`/profile/${userData.id}/home`}>
                <div className={s.avatar}>
                    <a href="#">
                        <img src={userData.photos.small !== null
                            ? userData.photos.small
                            : userAvatar} />
                    </a>
                </div>
            </NavLink>
            <div className={s.userInfo}>
                <p className={s.userName}>
                    {userData.name}
                </p>
                <h3 className={s.status}>
                    {userData.status}
                </h3>
                <p className={s.location}>
                    {`${`userData.location.cityName`}, ${`userData.location.country`}`}
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