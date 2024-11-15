import React from "react"
import s from "./NewPost.module.css"

const NewPost = ({ dispatch, newPostText }) => {

    const newPostElement = React.createRef()
    const newPost = () => {
        dispatch({ type: "ADD-POST" });
    }

    const onPostChange = () => {
        const text = newPostElement.current.value;
        dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
    }

    return (
        <div className={s.newPost}>
            <textarea
                ref={newPostElement}
                name="new-post"
                id="new-post"
                className={s.newPost}
                value={newPostText}
                onChange={onPostChange}
            ></textarea>

            <button onClick={newPost} className={s.button}>Написать</button>
        </div>
    )
}

export default NewPost;