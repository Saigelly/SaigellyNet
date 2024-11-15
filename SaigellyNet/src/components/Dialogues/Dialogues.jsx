import { Link } from "react-router-dom"
import s from "./Dialogues.module.css"
import Messages from "./Messages/Messages"
import Chats from "./Chats/Chats"

const Dialogues = ({ state, dispatch }) => {

    return (
        <section className={s.dialogues}>
            <Chats chats={state.chats} />
            <Messages
                messages={state.messages}
                newMessageText={state.newMessageText}
                dispatch={dispatch}
            />
        </section>
    )
}

export default Dialogues;