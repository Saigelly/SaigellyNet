import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setProfile } from "../../Redux/profileReducer";
import withRouter from "../../HOC/withRouter";
import { profileApi } from "../../api/api";


class ProfileContainer extends React.Component {
    
    componentDidMount = () => {
        profileApi.getProfile(this.props.router.params.userID)
            .then(data => this.props.setProfile(data))
            .catch(e => console.log(e))
    }

    render = () => {
        return <Profile
            socialItems={this.props.socialItems}
            statsValue={this.props.statsValue}
            profile={this.props.profile}
            tabLinks={this.props.tabLinks}
            userID={this.props.router.params.userID}
        />
    }
}

const mapStateToProps = (state) => ({
    socialItems: state.profileReducer.socialItems,
    statsValue: state.profileReducer.statsValue,
    profile: state.profileReducer.profile,
    tabLinks: state.profileReducer.tabLinks,

})

export default connect(mapStateToProps, { setProfile })(withRouter(ProfileContainer));