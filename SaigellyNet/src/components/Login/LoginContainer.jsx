import { compose } from "redux"
import { connect } from "react-redux"
import { putLogin } from "../../Redux/authReducer"
import Login from "./Login"
import withLoginRedirect from "../../HOC/withLoginRedirect"



const initialValues = {
    login: "Saigelly@gmail.com",
    password: "e5bhfafef",
    rememberMe: false
}

const LoginContainer = (props) => {
    // const navigate = useNavigate();

    const onSubmit = (formData) => {
        const data = {
            email: formData.login,
            password: formData.password
        }
        props.putLogin(data)
        // .then(() => navigate(`/profile/${props.userId}`));
        
    }
    
    return (
        <Login {...props} onSubmit={onSubmit} />
    )
}


const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    userId: state.authReducer.userId,
    
})

export default compose(
    withLoginRedirect,
    connect(mapStateToProps, { putLogin })
)(LoginContainer)

