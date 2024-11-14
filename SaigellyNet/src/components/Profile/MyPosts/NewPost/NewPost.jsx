import s from "./NewPost.module.css"

const NewPost = () => {
    return (
        <div className={s.newPost}>
            <textarea name="new-post" id="new-post" className={s.newPost}></textarea>
            <button className={s.button}>Написать</button>
        </div>
    )
}

export default NewPost;