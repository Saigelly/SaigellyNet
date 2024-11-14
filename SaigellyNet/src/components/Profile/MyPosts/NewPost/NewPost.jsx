import React from "react"
import s from "./NewPost.module.css"

const NewPost = ({ addPost }) => {
    const newPostElement = React.createRef()

    return (
        <div className={s.newPost}>
            <textarea ref={newPostElement} name="new-post" id="new-post" className={s.newPost}></textarea>
            <button onClick={() => addPost(newPostElement.current.value)} className={s.button}>Написать</button>
        </div>
    )
}

export default NewPost;