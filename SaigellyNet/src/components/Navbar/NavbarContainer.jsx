import { connect } from "react-redux";
import Navbar from "./Navbar";

const mapStateToProps = (state) => {
    return {
        state: state.navbarReducer,
        userId: state.authReducer.userId,
        isAuth: state.authReducer.isAuth,

    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);
export default NavbarContainer;