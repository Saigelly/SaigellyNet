import s from "./MyPosts.module.css"
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";


const MyPosts = ({posts, addPost}) => {
    return (
        <div className={s.myPosts}>
            <NewPost addPost={addPost}/>
            <Posts posts={posts}/>

        </div>
    )
}

export default MyPosts;