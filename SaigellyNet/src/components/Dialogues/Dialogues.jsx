import s from "./Dialogues.module.css";
import Chats from "./Chats/Chats";
import Messages from "./Messages/Messages";

const Dialogues = (props) => {
    return (
        <section className={s.dialogues}>
            <Chats chats={props.chats} />

            <Messages
                messages={props.messages}
                onAddMessageClick={props.onAddMessageClick}/>
        </section>
    )
}

export default Dialogues;