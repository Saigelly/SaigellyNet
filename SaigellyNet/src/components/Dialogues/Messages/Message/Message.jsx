import s from "./Message.module.css"

const Message = ({ message }) => {
    const persId = "1";
    return (
        <li className={`${s.message} ${message.userId === persId ? s.message_person : s.message_otherUser}`}>
            <a href="#" className={s.avatar}>
                <img src={message.imgSrc}
                    alt="avatar" className={s.avatar} />
            </a>
            <p className={s.text}>{message.text}</p>

        </li>
    )
}




export default Message;