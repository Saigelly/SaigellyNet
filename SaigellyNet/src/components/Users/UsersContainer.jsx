import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../../Redux/usersReducer";
import Users from "./Users";
import React from "react";
import axios from "axios";

class UsersContainer extends React.Component {
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
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            usersOnPage={this.props.usersOnPage}
            currentPage={this.props.currentPage}
            onPageClick={this.onPageClick}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            users={this.props.users} />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        usersOnPage: state.usersPage.usersOnPage,
        totalUsersCount: state.usersPage.totalUsersCount,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);