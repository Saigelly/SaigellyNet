import React from "react"
import s from "./NewPostForm.module.css"
import { Field } from "react-final-form"
import { Textarea } from "../../../common/FormControl/FormControl"
import { required } from "../../../../utilities/validates"

const NewPostForm = (props) => {
    return (
        <form className={s.newPost} onSubmit={props.handleSubmit}>
            <Field
                name="newPostText"
                component={Textarea}
                validate={required}
                className={s.newPost}
            />
            <button className={s.button}>Написать</button>
        </form>
    )
}

export default NewPostForm;