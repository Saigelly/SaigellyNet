import React from "react";
import { onAddPostClickCreator, onNewPostTextUpdateCreator } from "../../../Redux/profileReducer";
import s from "./MyPosts.module.css"
import Post from "./Posts/Post/Post";



const MyPosts = ({ state, dispatch }) => {

    const newPostElement = React.createRef()
    const newPost = () => {
        dispatch(onAddPostClickCreator());
    }

    const onPostChange = () => {
        debugger;
        const text = newPostElement.current.value;
        dispatch(onNewPostTextUpdateCreator(text));
    }

    return (
        <div className={s.myPosts}>
            <div className={s.newPost}>
                <textarea
                    ref={newPostElement}
                    className={s.newPost}
                    value={state.newPostText}
                    onChange={onPostChange}
                ></textarea>
                <button onClick={newPost} className={s.button}>Написать</button>
            </div>
            
            <div className={s.posts}>
                {state.posts.map(post => <Post post={post} key={post.id} />)}
            </div>


        </div>
    )
}

export default MyPosts;