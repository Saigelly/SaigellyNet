import React from "react";
import MyPosts from "../MyPosts";
import { onAddPostClickCreator, onNewPostTextUpdateCreator } from "../../../../Redux/profileReducer";
import StoreContext from "../../../../storeContext";



const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState().profileReducer;

                const onAddPost = () => {
                    store.dispatch(onAddPostClickCreator());
                }

                const onPostChange = (text) => {
                    store.dispatch(onNewPostTextUpdateCreator(text));
                }
                return (
                    <MyPosts onAddPost={onAddPost} onPostChange={onPostChange}
                        newPostText={state.newPostText} posts={state.posts} />
                )
            }
            }

        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;