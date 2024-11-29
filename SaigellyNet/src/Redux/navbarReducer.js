const initialState = {
    navItems: [
        { path: "profile", text: "Моя страница", isPersonal: false},
        { path: "dialogues", text: "Сообщения", isPersonal: false },
        { path: "users", text: "Пользователи", isPersonal: false },
        { path: "news", text: "Новости",  isPersonal: false },
        { path: "music", text: "Музыка",  isPersonal: false },
        { path: "settings", text: "Настройки",  isPersonal: false },
    ],
}

const navbarReducer = (state = initialState, action) => {

    return state;
}

export default navbarReducer;