import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, toggleIsFollowingFetching, unfollow } from "../../Redux/usersReducer";
import Users from "./Users";
import React from "react";
import { usersApi } from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount = () => {
        usersApi.getUsers(this.props.currentPage, this.props.usersOnPage)
            .then(data => {
                this.props.toggleIsFetching(true);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
                this.props.toggleIsFetching(false);
            })
            .catch(e => console.log(e))
    }
    onPageClick = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersApi.getUsers(pageNumber, this.props.usersOnPage)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.toggleIsFetching(false);
            })
            .catch(e => console.log(e))
    }

    postFollow = (userId) => {
        this.props.toggleIsFollowingFetching(true, userId);
        usersApi.postFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.follow(userId);
                }
                this.props.toggleIsFollowingFetching(false, userId);
            })
            .catch(e => console.log(e));
    }

    postUnfollow = (userId) => {
        this.props.toggleIsFollowingFetching(true, userId);
        usersApi.postUnfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.unfollow(userId);
                }
                this.props.toggleIsFollowingFetching(false, userId);
            })
            .catch(e => console.log(e));
    }
    render = () => {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            usersOnPage={this.props.usersOnPage}
            currentPage={this.props.currentPage}
            onPageClick={this.onPageClick}
            postFollow={this.postFollow}
            postUnfollow={this.postUnfollow}
            users={this.props.users}
            isFetching={this.props.isFetching}
            fallowingInProgress={this.props.fallowingInProgress}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        usersOnPage: state.usersPage.usersOnPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        fallowingInProgress: state.usersPage.fallowingInProgress
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setTotalUsersCount, setCurrentPage, toggleIsFetching, toggleIsFollowingFetching
})(UsersContainer);