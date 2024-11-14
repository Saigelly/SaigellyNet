import s from "./UserHeader.module.css"
import UserInfo from "./UserInfo/UserInfo";
import UserStats from "./UserStats/UserStats";

const UserHeader = ({props}) => {

    return (
        <header className={s.header}
            style={{ backgroundImage: "url('https://avatars.mds.yandex.net/i?id=963528c6e6f8013e0518f136f28b8066fdaead9f-5859366-images-thumbs&n=13')" }}>

            <div className={s.content}>
                <UserInfo props = {props.socialItems}/>
                <UserStats statsValue = {props.statsValue}/>
            </div>

        </header>
    )
}

export default UserHeader;