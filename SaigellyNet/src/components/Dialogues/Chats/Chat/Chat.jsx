import { Link } from "react-router-dom"
import s from "./Chat.module.css"

const Chat = ({ chat }) => {
    return (
        <li className={s.chatItem}>
            <Link to={`/dialogues${chat.path}`}>{chat.user}</Link>
        </li>
    )
}

export default Chat;