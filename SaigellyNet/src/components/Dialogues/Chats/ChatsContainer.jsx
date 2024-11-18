import s from "./Chats.module.css"
import Chats from "./Chats"
import StoreContext from "../../../storeContext"

const ChatsContainer = () => {
    return (<StoreContext.Consumer>
        {
            (store) => {
                return (
                    <Chats chats={store.getState().dialoguesReducer.chats} />
                )
            }
        }
    </StoreContext.Consumer>
    )
}

export default ChatsContainer;