import { Link } from "react-router-dom"
import s from "./Dialogues.module.css"
import Messages from "./Messages/Messages"
import Chats from "./Chats/Chats"

const Dialogues = (state) => {
    
    return (
        <section className={s.dialogues}>
            <Chats chats = {state.state.chats}/>
            <Messages messages = {state.state.messages}/>
        </section>
    )
}

export default Dialogues;