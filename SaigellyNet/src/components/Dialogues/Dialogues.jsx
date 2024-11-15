import { Link } from "react-router-dom"
import s from "./Dialogues.module.css"
import Messages from "./Messages/Messages"
import Chats from "./Chats/Chats"

const Dialogues = ({ state, addMessage, updateNewMessageText }) => {

    return (
        <section className={s.dialogues}>
            <Chats chats={state.chats} />
            <Messages
                messages={state.messages}
                newMessageText={state.newMessageText}
                addMessage={addMessage}
                updateNewMessageText={updateNewMessageText} />
        </section>
    )
}

export default Dialogues;