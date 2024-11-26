import UserCard from "./UserCard/UserCard";
import s from "./Users.module.css"
import React from "react";
import Preloader from "../common/Preloader/Preloader";

const Users = (props) => {
    const pagination = [];
    const numOfPages = Math.ceil(props.totalUsersCount / props.usersOnPage);

    for (let i = 1; i <= numOfPages && i <= 20; i++) {
        pagination.push(i);
    }

    return (
        <div className={s.users}>
            <ul className={s.paginationsLinks}>
                {pagination.map(p => {
                    return (
                        <li
                            key={p}
                            className={`${s.pages} ${p === props.currentPage && s.currentPage}`}
                            onClick={() => props.onPageClick(p)}
                        >{p}</li>
                    )
                })}
            </ul>
            {props.isFetching
                ? <Preloader />
                : <ul className={s.usersList}>
                    {props.users.map((u) =>
                        <UserCard
                            userData={u}
                            postFollow={props.postFollow}
                            postUnfollow={props.postUnfollow}
                            key={u.id}
                            fallowingInProgress={props.fallowingInProgress} />)}
                </ul>
            }

        </div>
    )
}


export default Users;