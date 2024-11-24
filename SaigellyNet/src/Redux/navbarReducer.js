const initialState = {
    navItems: [
        { path: "/profile", text: "Профиль" },
        { path: "/dialogues", text: "Сообщения" },
        { path: "/users", text: "Пользователи" },
        { path: "/news", text: "Новости" },
        { path: "/music", text: "Музыка" },
        { path: "/settings", text: "Настройки" },
    ],
}

const navbarReducer = (state = initialState, action) => {

    return state;
}

export default navbarReducer;