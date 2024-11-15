import s from "./MyPosts.module.css"
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";


const MyPosts = ({ state, addPost, updateNewPostText }) => {

    return (
        <div className={s.myPosts}>
            <NewPost
                addPost={addPost}
                newPostText={state.newPostText}
                updateNewPostText={updateNewPostText}
            />
            <Posts posts={state.posts} />

        </div>
    )
}

export default MyPosts;