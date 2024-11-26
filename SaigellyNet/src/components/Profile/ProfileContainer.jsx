import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { getProfile } from "../../Redux/profileReducer";
import withRouter from "../../HOC/withRouter";



class ProfileContainer extends React.Component {

    componentDidMount = () => {
        const userID = this.props.router.params.userID
        this.props.getProfile(userID)
    }

    render = () => {
        return <Profile
            statsValue={this.props.statsValue}
            profile={this.props.profile}
            tabLinks={this.props.tabLinks}
            userID={this.props.router.params.userID}
        />
    }
}

const mapStateToProps = (state) => ({
    statsValue: state.profileReducer.statsValue,
    profile: state.profileReducer.profile,
    tabLinks: state.profileReducer.tabLinks,
})

export default connect(mapStateToProps, { getProfile })(withRouter(ProfileContainer));