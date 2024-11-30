import React from "react";
import Header from "./Header";
import { getAuthUserData, logout } from "../../Redux/authReducer";
import { connect } from "react-redux";
import { compose } from "redux";

class HeaderContainer extends React.Component {
    componentDidMount = () => {
        if (!this.props.isAuth) {
            this.props.getAuthUserData();
        }
    }

    logoutProfile = () => {
        this.props.logout();
    }

    render = () => {
        return (<Header {...this.props}  logoutProfile={this.logoutProfile}/>)
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login,
})

export default compose(
    connect(mapStateToProps, { getAuthUserData, logout })
)(HeaderContainer);
