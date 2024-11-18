import React from "react";
import MyPosts from "../MyPosts";
import { onAddPostClickCreator, onNewPostTextUpdateCreator } from "../../../../Redux/profileReducer";



const MyPostsContainer = (props) => {

    const state = props.store.getState().profileReducer;

    const onAddPost = () => {
        props.store.dispatch(onAddPostClickCreator());
    }

    const onPostChange = (text) => {
        props.store.dispatch(onNewPostTextUpdateCreator(text));
    }

    return (
        <MyPosts onAddPost={onAddPost} onPostChange={onPostChange}
        newPostText={state.newPostText} posts={state.posts}/>
    )
}

export default MyPostsContainer;