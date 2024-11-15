import s from "./Post.module.css"

const Post = ({post}) => {
    return (
        <li className={s.post}>
            <div className={s.content}>
                <a href={post.path} className={s.avatar}>
                    <img src={post.imgSrc}
                        alt="avatar" className={s.avatar} />
                </a>
                <p className={s.text}>{post.text}</p>

            </div>
            <p className={s.like}>
                like: <span className={s.count}>{post.likeCount}</span>
            </p>

        </li>
    )
}

export default Post;