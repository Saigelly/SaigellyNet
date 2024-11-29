import { compose } from "redux"
import { connect } from "react-redux"
import { putLogin } from "../../Redux/authReducer"
import Login from "./Login"
import { Navigate } from "react-router-dom"



const initialValues = {
    login: "",
    password: "",
    rememberMe: false
}

const LoginContainer = (props) => {

    const onSubmit = ({email, password, remmemberMe = false}) => {
        props.putLogin(email, password, remmemberMe)
    }
    
    if (props.isAuth === true) return <Navigate to={`/profile/home`} />

    return (
        <Login {...props} onSubmit={onSubmit} />
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
})

export default compose(
    connect(mapStateToProps, { putLogin })
)(LoginContainer)

