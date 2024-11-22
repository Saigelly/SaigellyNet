import { connect } from "react-redux";
import UserHeader from "./UserHeader";

const mapStateToProps = (state) => {
    return {
        socialItems: state.profileReducer.socialItems,
        statsValue: state.profileReducer.statsValue
    }
}

const UserHeaderContainer = connect(mapStateToProps)(UserHeader);

export default UserHeaderContainer;
