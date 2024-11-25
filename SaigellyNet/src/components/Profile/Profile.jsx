import { Route, Routes } from "react-router-dom";
import s from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/Posts/MyPostsContainer";

import NavTabsContainer from "./NavTabs/NavTabsContainer";
import UserHeader from "./UserHeader/UserHeader";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {

    return (
        !props.profile
            ? <Preloader />
            : <section className={s.profile}>
                <UserHeader
                    socialItems={props.socialItems}
                    statsValue={props.statsValue}
                    profile={props.profile} />
                <NavTabsContainer />
                <Routes>
                    <Route path={"/2/home"}
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