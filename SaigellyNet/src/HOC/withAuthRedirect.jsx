import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

const withAuthRedirect = (Component) => {
    const mapStateToProps = (state) => {
        return {
            isAuth: state.authReducer.isAuth
        }
    }
    const withAuthRedirectComponent = (props) => {
        if (props.isAuth === false) return <Navigate to="/login/" />
        return <Component {...props} />
    }

    return connect(mapStateToProps)(withAuthRedirectComponent);
}


export default withAuthRedirect;

