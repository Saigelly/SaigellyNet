import { Link } from "react-router-dom"
import s from "./Dialogues.module.css"
import Messages from "./Messages/Messages"
import Chats from "./Chats/Chats"

const Dialogues = ({state, addMessage}) => {
    
    return (
        <section className={s.dialogues}>
            <Chats chats = {state.chats}/>
            <Messages messages = {state.messages} addMessage={addMessage}/>
        </section>
    )
}

export default Dialogues;