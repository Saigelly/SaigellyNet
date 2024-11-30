import SocialList from "./SocialList/SocialList";
import s from "./UserInfo.module.css"
import ProfileStatus from "./ProfileStatus/ProfileStatus"

const UserInfo = (props) => {

    return (
        <div className={s.userInfo}>
            <a href="#" className={s.avatar}>
                <img src={props.profile.photos.small}
                    alt="avatar" />
            </a>
            <div className={s.descr}>
                <h3 className={s.name}> {props.profile.fullName}</h3>
                <ProfileStatus profileStatus={props.profileStatus} putProfileStatus={props.putProfileStatus}/>
                <SocialList contacts={props.profile.contacts} />
            </div>
        </div>


    )
}

export default UserInfo;