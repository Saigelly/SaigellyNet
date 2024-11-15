import s from "./MyPosts.module.css"
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";


const MyPosts = ({ posts, addPost, newPostText, updateNewPostText }) => {

    return (
        <div className={s.myPosts}>
            <NewPost
                addPost={addPost}
                newPostText = {newPostText}
                updateNewPostText={updateNewPostText}
            />
            <Posts posts={posts} />

        </div>
    )
}

export default MyPosts;