import { Link } from "react-router-dom"
import s from "./Dialogues.module.css"
import Messages from "./Messages/Messages"
import Chats from "./Chats/Chats"
import MessagesContainer from "./Messages/MessagesContainer"

const Dialogues = ({ state, store }) => {

    return (
        <section className={s.dialogues}>
            <Chats chats={state.chats} />
            <MessagesContainer
                store = {store}
            />
        </section>
    )
}

export default Dialogues;