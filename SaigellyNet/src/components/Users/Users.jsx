import UserCard from "./UserCard/UserCard";
import s from "./Users.module.css"

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                avatarURL: "https://avatars.mds.yandex.net/i?id=ffc20310cc4dc43bc0db7e94582ee01d5757e375-4884516-images-thumbs&n=13",
                bannerUrl: "",
                name: {
                    firstName: "Rebeca",
                    lastName: "Powel"
                },
                status: "Я тут босс",
                location: {
                    country: "Россия",
                    cityName: "Москва"
                },
                followed: true,
            },
            {
                id: 2,
                avatarURL: "https://avatars.mds.yandex.net/i?id=ffc20310cc4dc43bc0db7e94582ee01d5757e375-4884516-images-thumbs&n=13",
                bannerUrl: "",
                name: {
                    firstName: "John",
                    lastName: "Caius"
                },
                status: "Я тут босс тоже",
                location: {
                    country: "Беларусь",
                    cityName: "Минск"
                },
                followed: false,
            },
            {
                id: 3,
                avatarURL: "https://avatars.mds.yandex.net/i?id=ffc20310cc4dc43bc0db7e94582ee01d5757e375-4884516-images-thumbs&n=13",
                bannerUrl: "",
                name: {
                    firstName: "Shan",
                    lastName: "Foster"
                },
                status: "И я тут босс, ведь так?... так?",
                location: {
                    country: "Франция",
                    cityName: "Париж"
                },
                followed: true,
            },])
    }

    return (
        <section className={s.users}>
            {/* {props.users.map((u) =>  {<div>{u.name}</div>})} */}
            <ul className={s.usersList}>
                {props.users.map((u) =>
                    <UserCard
                        userData={u}
                        follow={props.follow}
                        unfollow={props.unfollow}
                        key={u.id} />)}
            </ul>
        </section>
    )
}

export default Users;