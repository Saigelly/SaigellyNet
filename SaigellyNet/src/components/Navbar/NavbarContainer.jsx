import StoreContext from "../../storeContext";
import Navbar from "./Navbar";

const NavbarContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    return(
                        <Navbar  state = {store.getState().navbarReducer}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default NavbarContainer;