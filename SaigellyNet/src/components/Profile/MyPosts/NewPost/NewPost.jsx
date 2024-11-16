import React from "react"
import s from "./NewPost.module.css"
import { onAddPostClickCreator, onNewPostTextUpdateCreator } from "../../../../Redux/profileReducer"


const NewPost = ({ dispatch, newPostText }) => {

    const newPostElement = React.createRef()
    const newPost = () => {
        dispatch(onAddPostClickCreator());
    }

    const onPostChange = () => {
        const text = newPostElement.current.value;
        dispatch(onNewPostTextUpdateCreator(text));
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