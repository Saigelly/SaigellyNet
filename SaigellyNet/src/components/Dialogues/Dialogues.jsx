import s from "./Dialogues.module.css";
import Chats from "./Chats/Chats";
import Messages from "./Messages/Messages";

const Dialogues = (props) => {
    return (
        <section className={s.dialogues}>
            <Chats chats={props.chats} />
            <Messages
                newMessageText={props.newMessageText}
                messages={props.messages}
                onAddMessageClick={props.onAddMessageClick}
                onNewMessageTextUpdate={props.onNewMessageTextUpdate} />
        </section>
    )
}

export default Dialogues;