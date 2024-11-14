import MyPosts from "./MyPosts/MyPosts";
import NavTabs from "./NavTabs/NavTabs";
import s from "./Profile.module.css"
import UserHeader from "./UserHeader/UserHeader";

const Profile = ({state}) => {

    return (
        <section className={s.profile}>
            <UserHeader props = {state.userHeader}/>
            <NavTabs props = {state.navTabs}/>
            <MyPosts props = {state.myPosts}/>
        </section>
    )
}

export default Profile;