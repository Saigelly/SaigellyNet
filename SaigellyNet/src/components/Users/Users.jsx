import UserCard from "./UserCard/UserCard";
import s from "./Users.module.css"
import React from "react";

const Users = (props) => {
    const pagination = [];
    const numOfPages = Math.ceil(props.totalUsersCount / props.usersOnPage);

    for (let i = 1; i <= numOfPages && i <= 20; i++) {
        pagination.push(i);
    }

    return (
        <div className={s.users}>
            {pagination.map(p => {
                return (
                    <span
                        key={p}
                        className={`${p === props.currentPage && s.currentPage}`}
                        onClick={() => props.onPageClick(p)}
                    >{p}</span>
                )
            })}
            <ul className={s.usersList}>
                {props.users.map((u) =>
                    <UserCard
                        userData={u}
                        follow={props.follow}
                        unfollow={props.unfollow}
                        key={u.id} />)}
            </ul>
        </div>
    )
}


export default Users;