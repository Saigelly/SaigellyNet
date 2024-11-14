import s from "./Messages.module.css"
import Message from "./Message/Message";

const Messages = ({messages}) => {
    return (
            <div className={s.messages}>
                <ul className={s.messagesList}>
                    {messages.map(message => <Message message={message} key={message.id} />)}
                </ul>
            </div>
    )
}

export default Messages;