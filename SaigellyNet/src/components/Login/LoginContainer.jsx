import { compose } from "redux"
import { connect } from "react-redux"
import { logout, putLogin } from "../../Redux/authReducer"
import Login from "./Login"



const initialValues = {
    login: "Saigelly@gmail.com",
    password: "e5bhfafef",
    rememberMe: false
}

const LoginContainer = (props) => {
    const onSubmit = (formData) => {
        const data = {
            email: formData.login,
            password: formData.password
        }
        console.log(data)
        props.putLogin(data)
    }
    
    return (
        <Login {...props} onSubmit={onSubmit} />
    )
}


const mapStateToProps = (state) => ({})

export default compose(
    connect(mapStateToProps, { putLogin })
)(LoginContainer)

