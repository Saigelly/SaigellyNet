import { Outlet, Route, Routes } from "react-router-dom";
import s from "./Profile.module.css"
import UserHeader from "./UserHeader/UserHeader";
import Preloader from "../common/Preloader/Preloader";
import NavTabs from "./NavTabs/NavTabs";

const Profile = (props) => {

    return (
        !props.profile
            ? <Preloader />
            : <section className={s.profile}>
                <UserHeader statsValue={props.statsValue} profile={props.profile} />
                <NavTabs userId={props.profile.userId} tabLinks={props.tabLinks} />
                <Outlet />
            </section>
    )
}

export default Profile;