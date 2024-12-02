import { connect } from "react-redux";
import { setProfile } from "../../Redux/profileReducer";
import Navbar from "./Navbar";

const mapStateToProps = (state) => {
    return {
        state: state.navbarReducer,
        userId: state.authReducer.userId,
        isAuth: state.authReducer.isAuth,
    }
}


export default connect(mapStateToProps, {setProfile})(Navbar);
