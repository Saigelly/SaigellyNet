import React from "react";
import Header from "./Header";
import { getAuthUserData } from "../../Redux/authReducer";
import { connect } from "react-redux";
import { compose } from "redux";

class HeaderContainer extends React.Component {
    componentDidMount = () => {
        if (!this.props.isAuth) {
            this.props.getAuthUserData();
        }
    }
    render = () => {
        return (<Header {...this.props} />)
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login,
})

export default compose(
    connect(mapStateToProps, { getAuthUserData })
)(HeaderContainer);
