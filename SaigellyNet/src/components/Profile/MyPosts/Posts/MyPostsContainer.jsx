import MyPosts from "../MyPosts";
import { onAddPostClickCreator, onNewPostTextUpdateCreator } from "../../../../Redux/profileReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        newPostText: state.profileReducer.newPostText,
        posts: state.profileReducer.posts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: () => {
            dispatch(onAddPostClickCreator());
        },
        onPostChange: (text) => {
            dispatch(onNewPostTextUpdateCreator(text));
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;