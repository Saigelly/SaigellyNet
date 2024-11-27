import React from "react";
import s from "./Messages.module.css"
import Message from "./Message/Message";


const Messages = (props) => {

    const newMessageElement = React.createRef();

    const addNewMessage = () => {
        props.onAddMessageClick();
    }
    const onMessageChange = () => {
        const text = newMessageElement.current.value;
        props.onNewMessageTextUpdate(text);
    }

    return (
        <div className={s.chat}>
            <div className={s.messages}>
                <ul className={s.messagesList}>
                    {props.messages.map(message =>
                        <Message message={message} key={message.id} />)}
                </ul>
            </div>
            <div className={s.newMessage}>
                <textarea
                    ref={newMessageElement}
                    className={s.newPost}
                    value={props.newMessageText}
                    onChange={onMessageChange}
                />
                <button
                    onClick={addNewMessage}
                    className={s.button}
                >
                    Написать
                </button>
            </div>
        </div>
    )
}

export default Messages;