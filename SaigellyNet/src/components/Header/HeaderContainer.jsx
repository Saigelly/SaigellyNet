import React from "react";
import Header from "./Header";
import { setUserData } from "../../Redux/authReducer";
import { connect } from "react-redux";
import { usersApi } from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount = () => {
        usersApi.auth()
            .then(data => {
                const { id, login, email } = data.data;
                this.props.setUserData(id, login, email);
            })
            .catch(e => console.log(e))
    }

    render = () => {
        return (<Header {...this.props}/>)
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login,
})

export default connect(mapStateToProps, { setUserData })(HeaderContainer);