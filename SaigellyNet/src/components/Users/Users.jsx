import  axios from "axios";
import UserCard from "./UserCard/UserCard";
import s from "./Users.module.css"



const Users = (props) => {
    if (props.users.length === 0) {
        
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        }).catch(e => console.log("ошибка", e))
    }

    return (
        <section className={s.users}>
            {/* {props.users.map((u) =>  {<div>{u.name}</div>})} */}
            <ul className={s.usersList}>
                {props.users.map((u) =>
                    <UserCard
                        userData={u}
                        follow={props.follow}
                        unfollow={props.unfollow}
                        key={u.id} />)}
            </ul>
        </section>
    )
}

export default Users;