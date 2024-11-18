import StoreContext from "../../../storeContext";
import UserHeader from "./UserHeader";

const UserHeaderContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().profileReducer;
                    return (
                        <UserHeader socialItems={state.socialItems}
                            statsValue={state.statsValue} />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default UserHeaderContainer;
