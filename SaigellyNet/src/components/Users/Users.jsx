import axios from "axios";
import UserCard from "./UserCard/UserCard";
import s from "./Users.module.css"
import React from "react";

class Users extends React.Component {
    constructor(props) {
        super(props);
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items)
                })
                .catch(e => console.log(e))
        };
    }
    render = () => {
        return (
            <div className={s.users}>
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