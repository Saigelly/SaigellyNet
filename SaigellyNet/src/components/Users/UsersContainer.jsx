import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow } from "../../Redux/usersReducer";
import Users from "./Users";
import React from "react";
import axios from "axios";
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
    render = () => {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            usersOnPage={this.props.usersOnPage}
            currentPage={this.props.currentPage}
            onPageClick={this.onPageClick}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            users={this.props.users}
            isFetching={this.props.isFetching} />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        usersOnPage: state.usersPage.usersOnPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setTotalUsersCount, setCurrentPage, toggleIsFetching,
})(UsersContainer);