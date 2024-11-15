import SocialList from "./SocialList/SocialList";
import s from "./UserInfo.module.css"

const UserInfo = ({socialItems}) => {

    return (
        <div className={s.userInfo}>
            <a href="#" className={s.avatar}>
                <img src="https://avatars.mds.yandex.net/i?id=ffc20310cc4dc43bc0db7e94582ee01d5757e375-4884516-images-thumbs&n=13"
                    alt="avatar" />
            </a>
            <div className={s.descr}>
                <h3 className={s.name}> Молчанов Дмитрий</h3>
                <p className={s.status}>Разрабатываю соцсеть</p>
                <SocialList socialItems={socialItems}/>
                
            </div>
        </div>
    )
}

export default UserInfo;