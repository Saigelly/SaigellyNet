import React from "react";
import s from "./Messages.module.css"
import Message from "./Message/Message";

const Messages = ({ messages, addMessage, newMessageText, updateNewMessageText }) => {

    const newMessageElement = React.createRef();

    const onMessageChange = () => {
        const text = newMessageElement.current.value;
        updateNewMessageText(text);
    }
    const addNewMessage = () => {
        addMessage();
    }

    return (
        <div className={s.chat}>
            <div className={s.messages}>
                <ul className={s.messagesList}>
                    {messages.map(message => <Message message={message} key={message.id} />)}
                </ul>
            </div>
            <div className={s.newMessage}>
                <textarea
                    ref={newMessageElement}
                    name="new-message"
                    id="new-message"
                    className={s.newPost}
                    value={newMessageText}
                    onChange={onMessageChange}
                />
                <button onClick={addNewMessage} className={s.button}>Написать</button>
            </div>
        </div>
    )
}

export default Messages;