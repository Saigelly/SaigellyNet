import { Route, Routes } from "react-router-dom";
import NavTabs from "./NavTabs/NavTabs";
import s from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/Posts/MyPostsContainer";
import UserHeaderContainer from "./UserHeader/UserHeaderContainer";

const Profile = ({ state, store }) => {

    return (
        <section className={s.profile}>
            <UserHeaderContainer
                store={store}
            />
            <NavTabs tabLinks={state.tabLinks} />
            <Routes>
                <Route path={"/home"}
                    element={<MyPostsContainer
                        store={store}
                    />} />
                <Route index
                    element={<MyPostsContainer
                        store={store}
                    />} />
                <Route path="about" element={<div> Обо МНЕ</div>} />
                <Route path="friends" element={<div>Друзья</div>} />
                <Route path="gallery" element={<div> Галерея</div>} />
            </Routes>

        </section>
    )
}

export default Profile;