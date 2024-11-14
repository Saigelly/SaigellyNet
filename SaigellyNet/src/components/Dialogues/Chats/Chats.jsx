import s from "./Chats.module.css"
import Chat from "./Chat/Chat"

const Chats = ({chats}) => {

    return (
            <div className={s.chats}>
                <ul className={s.chatList}>
                    {chats.map(chat => <Chat chat={chat} key={chat.id} />)}
                </ul>
            </div>
    )
}

export default Chats;