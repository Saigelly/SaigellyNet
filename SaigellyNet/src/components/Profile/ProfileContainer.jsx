import { Route, Routes } from "react-router-dom";
import MyPostsContainer from "./MyPosts/Posts/MyPostsContainer";
import UserHeaderContainer from "./UserHeader/UserHeaderContainer";
import NavTabsContainer from "./NavTabs/NavTabsContainer";
import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setProfile } from "../../Redux/profileReducer";

class ProfileContainer extends React.Component {
    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setProfile(response.data);
                // this.props.setUsers(response.data.items);
                // this.props.setTotalUsersCount(response.data.totalCount);
            })
            .catch(e => console.log(e))
    }

    render = () => {
        return <Profile
            socialItems={this.props.socialItems}
            statsValue={this.props.statsValue}
            profile={this.props.profile} />
    }
}

const mapStateToProps = (state) => ({
    socialItems: state.profileReducer.socialItems,
    statsValue: state.profileReducer.statsValue,
    profile: state.profileReducer.profile,
})

export default connect(mapStateToProps, {setProfile})(ProfileContainer);