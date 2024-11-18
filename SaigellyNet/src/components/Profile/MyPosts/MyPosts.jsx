import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Posts/Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {

    return (
        <div className={s.myPosts}>
            <NewPost
                onAddPost={props.onAddPost}
                onPostChange={props.onPostChange}
                newPostText={props.newPostText}
            />

            <div className={s.posts}>
                {props.posts.map(post => <Post post={post} key={post.id} />)}
            </div>


        </div>
    )
}

export default MyPosts;