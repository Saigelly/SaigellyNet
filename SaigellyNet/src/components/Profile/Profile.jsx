import { Route, Routes } from "react-router-dom";
import MyPosts from "./MyPosts/MyPosts";
import NavTabs from "./NavTabs/NavTabs";
import s from "./Profile.module.css"
import UserHeader from "./UserHeader/UserHeader";

const Profile = ({ state, addPost, updateNewPostText }) => {

    return (
        <section className={s.profile}>
            <UserHeader
                socialItems={state.socialItems}
                statsValue={state.statsValue}
            />
            <NavTabs tabLinks={state.tabLinks} />
            <Routes>
                <Route path={"/home"}
                    element={<MyPosts
                        posts={state.posts}
                        newPostText = {state.newPostText}
                        addPost={addPost}
                        updateNewPostText={updateNewPostText} />} />
                <Route index
                    element={<MyPosts
                        posts={state.posts}
                        newPostText = {state.newPostText}
                        addPost={addPost}
                        updateNewPostText={updateNewPostText} />} />
                <Route path="about" element={<div> Обо МНЕ</div>} />
                <Route path="friends" element={<div>Друзья</div>} />
                <Route path="gallery" element={<div> Галерея</div>} />
            </Routes>

        </section>
    )
}

export default Profile;