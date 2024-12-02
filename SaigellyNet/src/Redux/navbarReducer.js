const initialState = {
    navItems: [
        { path: "profile/home", title: "Моя страница", iconSrc:"home", isPersonal: false},
        { path: "dialogues", title: "Сообщения", iconSrc:"messages", isPersonal: false },
        { path: "users", title: "Пользователи", iconSrc:"user", isPersonal: false },
        { path: "news", title: "Новости",  iconSrc:"home", isPersonal: false },
        { path: "music", title: "Музыка",  iconSrc:"home", isPersonal: false },
        { path: "settings", title: "Настройки", iconSrc:"home", isPersonal: false },
    ],
}

const navbarReducer = (state = initialState, action) => {

    return state;
}

export default navbarReducer;