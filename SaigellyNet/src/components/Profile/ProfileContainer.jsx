import { Route, Routes } from "react-router-dom";
import MyPostsContainer from "./MyPosts/Posts/MyPostsContainer";
import UserHeaderContainer from "./UserHeader/UserHeaderContainer";
import NavTabsContainer from "./NavTabs/NavTabsContainer";
import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setProfile } from "../../Redux/profileReducer";
import withRouter from "../../HOC/withRouter";


class ProfileContainer extends React.Component {
    
    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.router.params.userID}`)
            .then(response => {
                this.props.setProfile(response.data);
            })
            .catch(e => console.log(e))
    }

    render = () => {
        return <Profile
            socialItems={this.props.socialItems}
            statsValue={this.props.statsValue}
            profile={this.props.profile}
            tabLinks={this.props.tabLinks}
            userID={this.props.router.params.userID} />
    }
}

const mapStateToProps = (state) => ({
    socialItems: state.profileReducer.socialItems,
    statsValue: state.profileReducer.statsValue,
    profile: state.profileReducer.profile,
    tabLinks: state.profileReducer.tabLinks,
})

export default connect(mapStateToProps, {setProfile})(withRouter(ProfileContainer));