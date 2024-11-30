import MyPosts from "../MyPosts";
import { onAddPostClick } from "../../../../Redux/profileReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profileReducer.posts
    }
}

const MyPostsContainer = connect(mapStateToProps, {onAddPostClick})(MyPosts)

export default MyPostsContainer;