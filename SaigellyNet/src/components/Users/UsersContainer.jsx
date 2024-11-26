import { connect } from "react-redux";
import { follow, getUsers, toggleIsFetching, unfollow } from "../../Redux/usersReducer";
import Users from "./Users";
import React from "react";

class UsersContainer extends React.Component {
    componentDidMount = () => {
        this.props.getUsers(this.props.currentPage, this.props.usersOnPage);
    }
    onPageClick = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.usersOnPage);
    }
    postFollow = (userId) => {
        this.props.follow(userId);
    }
    deleteFollow = (userId) => {
        this.props.unfollow(userId);
    }
    render = () => {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            usersOnPage={this.props.usersOnPage}
            currentPage={this.props.currentPage}
            onPageClick={this.onPageClick}
            follow={this.postFollow}
            unfollow={this.deleteFollow}
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
    follow, unfollow, toggleIsFetching, getUsers
})(UsersContainer);