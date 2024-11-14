import s from "./MyPosts.module.css"
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";


const MyPosts = ({props}) => {
    return (
        <div className={s.myPosts}>
            <NewPost />
            <Posts posts={props.posts}/>

        </div>
    )
}

export default MyPosts;