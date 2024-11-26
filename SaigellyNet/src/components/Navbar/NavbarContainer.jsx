import { connect } from "react-redux";
import Navbar from "./Navbar";
import { setProfile } from "../../Redux/profileReducer";

const mapStateToProps = (state) => {
    return {
        state: state.navbarReducer,
        userId: state.authReducer.userId,
        isAuth: state.authReducer.isAuth,
    }
}


const NavbarContainer = connect(mapStateToProps, {setProfile})(Navbar);
export default NavbarContainer;