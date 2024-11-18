import UserHeader from "./UserHeader";

const UserHeaderContainer = (props) => {
    const state = props.store.getState().profileReducer;
    return (
        <UserHeader socialItems={state.socialItems}
        statsValue={state.statsValue} />
    )
}

export default UserHeaderContainer;
