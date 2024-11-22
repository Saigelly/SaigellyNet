import { connect } from "react-redux";
import Navbar from "./Navbar";

const mapStateToProps = (state) => {
    return {
        state: state.navbarReducer,
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);
export default NavbarContainer;