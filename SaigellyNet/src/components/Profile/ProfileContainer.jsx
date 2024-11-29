import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { getProfile, getProfileStatus, putProfileStatus } from "../../Redux/profileReducer";
import withRouter from "../../HOC/withRouter";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {

    componentDidMount = () => {
        let userId = this.props.router.params.userID
        if (!userId) {
            userId = 31899;
        }
        this.props.getProfile(userId);
        this.props.getProfileStatus(userId);
    }

    render = () => {
        return <Profile
            {...this.props}
            userID={this.props.router.params.userID}
            putProfileStatus={this.props.putProfileStatus}
        />
    }
}

const mapStateToProps = (state) => ({
    statsValue: state.profileReducer.statsValue,
    profile: state.profileReducer.profile,
    tabLinks: state.profileReducer.tabLinks,
    profileStatus: state.profileReducer.profileStatus,
})

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { getProfile, getProfileStatus, putProfileStatus }),
    withRouter
)(ProfileContainer)