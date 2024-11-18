import React from "react";
import { onAddMessageClickCreator, onNewMessageTextUpdateCreator } from "../../../Redux/dialoguesReducer";
import Messages from "./Messages";
import StoreContext from "../../../storeContext";


const MessagesContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().dialoguesReducer;

                    const onAddMessage = () => {
                        store.dispatch(onAddMessageClickCreator());
                    }
                    const onMessageChange = (text) => {
                        store.dispatch(onNewMessageTextUpdateCreator(text));
                    }

                    return (
                        <Messages
                            onAddMessage={onAddMessage}
                            onMessageChange={onMessageChange}
                            messages={state.messages}
                            newMessageText={state.newMessageText}
                        />
                    )
                }
            }

        </StoreContext.Consumer>
    )
}

export default MessagesContainer;