import axios from "axios";
import UserCard from "./UserCard/UserCard";
import s from "./Users.module.css"
import React from "react";

class Users extends React.Component {
    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
            .catch(e => console.log(e))
    }
    onPageClick = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersOnPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
            .catch(e => console.log(e))
    }
    render = () => {
        const pagination = [];
        const numOfPages = Math.ceil(this.props.totalUsersCount / this.props.usersOnPage);

        for (let i = 1; i <= numOfPages && i <= 20; i++) {
            pagination.push(i);
        }

        return (
            <div className={s.users}>
                {pagination.map(p => {
                    return (
                        <span
                            key={p}
                            className={`${p === this.props.currentPage && s.currentPage}`}
                            onClick={() => this.onPageClick(p)}
                        >{p}</span>
                    )
                })}
                <ul className={s.usersList}>
                    {this.props.users.map((u) =>
                        <UserCard
                            userData={u}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            key={u.id} />)}
                </ul>
            </div>
        )
    }
}

export default Users;