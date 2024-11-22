import { connect } from "react-redux";
import NavTabs from "./NavTabs";

const mapStateToProps = (state) => {
    return {
        tabLinks: state.profileReducer.tabLinks,
    }
}

const NavTabsContainer = connect(mapStateToProps)(NavTabs);
export default NavTabsContainer;