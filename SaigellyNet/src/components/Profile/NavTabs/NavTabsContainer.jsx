import StoreContext from "../../../storeContext";
import NavTabs from "./NavTabs";

const NavTabsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    return (
                        <NavTabs tabLinks={store.getState().profileReducer.tabLinks} />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default NavTabsContainer;