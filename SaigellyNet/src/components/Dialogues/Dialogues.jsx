import s from "./Dialogues.module.css";
import MessagesContainer from "./Messages/MessagesContainer";
import ChatsContainer from "./Chats/ChatsContainer";

const Dialogues = () => {

    return (
        <section className={s.dialogues}>
            <ChatsContainer />
            <MessagesContainer />
        </section>
    )
}

export default Dialogues;