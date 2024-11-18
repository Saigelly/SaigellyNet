import React from "react"
import s from "./NewPost.module.css"

const NewPost = (props) => {

    const newPostElement = React.createRef();

    const newPost = () => {
        props.onAddPost();
    }

    const onTextPostChange = () => {
        const text = newPostElement.current.value;
        props.onPostChange(text);
    }
    return (
        <div className={s.newPost}>
            <textarea
                ref={newPostElement}
                className={s.newPost}
                value={props.newPostText}
                onChange={onTextPostChange}
            ></textarea>

            <button onClick={newPost} className={s.button}>Написать</button>
        </div>
    )
}

export default NewPost;