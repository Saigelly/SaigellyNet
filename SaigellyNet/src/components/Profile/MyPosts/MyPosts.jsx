import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Posts/Post/Post";
import { Form } from "react-final-form";
import NewPostForm from "./NewPost/NewPostForm";
import Posts from "./Posts/Posts";





const MyPosts = (props) => {

    const newPost = (values) => {
        props.onAddPostClick(values.newPostText);
    }

    const initialValues = {
        newPostText: "",
    }

    return (
        <div className={s.myPosts}>
            < Form
                initialValues={initialValues}
                onSubmit={newPost}>
                {NewPostForm}
            </Form>
            
            <Posts posts={props.posts} />
        </div>
    )
}

export default MyPosts;