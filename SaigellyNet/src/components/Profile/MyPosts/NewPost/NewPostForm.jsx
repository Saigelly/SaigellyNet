import React from "react"
import s from "./NewPostForm.module.css"
import { Field } from "react-final-form"

const NewPostForm = (props) => {
    return (
        <form className={s.newPost} onSubmit={props.handleSubmit}>
            <Field
                name="newPostText"
                component={"textarea"}
                className={s.newPost}
            />
            <button className={s.button}>Написать</button>
        </form>
    )
}

export default NewPostForm;