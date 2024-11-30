import React from "react";
import s from "./Messages.module.css"
import Message from "./Message/Message";
import { Field, Form } from "react-final-form";


const Messages = (props) => {

    const initialValues = {
        newMessageText: ""
    }

    const addNewMessage = (values) => {
        props.onAddMessageClick(values.newMessageText);
    }

    return (
        <div className={s.chat}>
            <Dialogue messages={props.messages} />
            <Form
                initialValues={initialValues}
                onSubmit={addNewMessage}>
                {NewMessageForm}
            </Form>
        </div>
    )
}

const NewMessageForm = (props) => {
    return (
        <form className={s.newMessage} onSubmit={props.handleSubmit}>
            <Field
                name="newMessageText"
                component={"textarea"}
                className={s.newPost}
            />
            <button className={s.button}>
                Написать
            </button>
        </form>
    )
}

const Dialogue = (props) => {
    return (
        <div className={s.messages}>
            <ul className={s.messagesList}>
                {props.messages.map(message => <Message message={message} key={message.id} />)}
            </ul>
        </div>
    )
}

export default Messages;
