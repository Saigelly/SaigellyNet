import { Route, Routes } from "react-router-dom";
import s from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/Posts/MyPostsContainer";
import UserHeaderContainer from "./UserHeader/UserHeaderContainer";
import NavTabsContainer from "./NavTabs/NavTabsContainer";

const Profile = () => {

    return (
        <section className={s.profile}>
            <UserHeaderContainer />
            <NavTabsContainer />
            <Routes>
                <Route path={"/home"}
                    element={<MyPostsContainer />} />
                <Route index
                    element={<MyPostsContainer />} />
                <Route path="about" element={<div> Обо МНЕ</div>} />
                <Route path="friends" element={<div>Друзья</div>} />
                <Route path="gallery" element={<div> Галерея</div>} />
            </Routes>

        </section>
    )
}

export default Profile;