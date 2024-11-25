import { connect } from "react-redux";
import NavTabs from "./NavTabs";

const mapStateToProps = (state) => {
    return {
        tabLinks: state.profileReducer.tabLinks,
        userID: !state.profile.userId ? null : state.profile.userId,
    }
}

const NavTabsContainer = connect(mapStateToProps)(NavTabs);
export default NavTabsContainer;