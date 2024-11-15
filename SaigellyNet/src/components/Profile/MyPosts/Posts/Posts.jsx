import s from "./Posts.module.css"
import Post from "./Post/Post";

const Posts = ({ posts }) => {
    return (
        <ul className={s.posts}>
            {posts.map(post => <Post post={post} key={post.id} />)}
        </ul>
    )
}

export default Posts;