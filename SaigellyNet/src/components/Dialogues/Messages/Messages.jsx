import React from "react";
import s from "./Messages.module.css"
import Message from "./Message/Message";

const Messages = ({ messages, addMessage }) => {
    const newMessageElement = React.createRef();
    return (
        <div className={s.chat}>
            <div className={s.messages}>
                <ul className={s.messagesList}>
                    {messages.map(message => <Message message={message} key={message.id} />)}
                </ul>
            </div>
            <div className={s.newMessage}>
                <textarea ref={newMessageElement} name="new-message" id="new-message" className={s.newPost}></textarea>
                <button onClick={() => addMessage(newMessageElement.current.value)} className={s.button}>Написать</button>
            </div>
        </div>
    )
}

export default Messages;