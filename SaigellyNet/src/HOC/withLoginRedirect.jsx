import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

const withLoginRedirect = (Component) => {
    const mapStateToProps = (state) => {
        return {
            isAuth: state.authReducer.isAuth
        }
    }
    const withAuthRedirectComponent = (props) => {
        if (props.isAuth === true) return <Navigate to={`/profile/`} />
        return <Component {...props} />
    }

    return connect(mapStateToProps)(withAuthRedirectComponent);
}


export default withLoginRedirect;

