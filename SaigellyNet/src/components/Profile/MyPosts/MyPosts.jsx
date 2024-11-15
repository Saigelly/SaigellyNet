import s from "./MyPosts.module.css"
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";


const MyPosts = ({ state, dispatch }) => {

    return (
        <div className={s.myPosts}>
            <NewPost
                dispatch={dispatch}
                newPostText={state.newPostText}
            />
            <Posts posts={state.posts} />

        </div>
    )
}

export default MyPosts;