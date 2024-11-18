import React from "react";
import { onAddMessageClickCreator, onNewMessageTextUpdateCreator } from "../../../Redux/dialoguesReducer";
import Messages from "./Messages";


const MessagesContainer = (props) => {

    const state = props.store.getState().dialoguesReducer;

    const onAddMessage = () => {
        props.store.dispatch(onAddMessageClickCreator());
    }
    const onMessageChange = (text) => {
        props.store.dispatch(onNewMessageTextUpdateCreator(text));
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

export default MessagesContainer;