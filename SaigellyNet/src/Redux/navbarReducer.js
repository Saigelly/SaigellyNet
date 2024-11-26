const initialState = {
    navItems: [
        { path: "profile", text: "Моя страница", isPersonal: true, onclick: "setProfile" },
        { path: "dialogues", text: "Сообщения", isPersonal: true },
        { path: "users", text: "Пользователи", isPersonal: false },
        { path: "news", text: "Новости",  isPersonal: false },
        { path: "music", text: "Музыка",  isPersonal: false },
        { path: "settings", text: "Настройки",  isPersonal: true },
    ],
}

const navbarReducer = (state = initialState, action) => {

    return state;
}

export default navbarReducer;