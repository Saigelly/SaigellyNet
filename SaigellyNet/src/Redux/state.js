let rerenderEntireTree = () => {
    console.log("state changed")
}

const state = {
    profile: {
        socialItems: [
            { link: "#", imgSrc: "/src/assets/github.svg", imgAlt: "github" },
            { link: "#", imgSrc: "/src/assets/github.svg", imgAlt: "github" },
            { link: "#", imgSrc: "/src/assets/github.svg", imgAlt: "github" },
        ],
        statsValue: [
            { text: "Постов: ", value: 0 },
            { text: "Коментариев: ", value: 2 },
            { text: "Просмотров: ", value: 12 },
        ],
        tabLinks: [
            { path: "/profile/home", label: "Стена" },
            { path: "/profile/about", label: "Обо мне" },
            { path: "/profile/friends", label: "Друзья" },
            { path: "/profile/gallery", label: "Фото" },
        ],
        posts: [
            {
                id: "3",
                path: "#",
                imgSrc: "https://avatars.mds.yandex.net/i?id=ffc20310cc4dc43bc0db7e94582ee01d5757e375-4884516-images-thumbs&n=13",
                text: "Добро пожаловать на страницу первого пользователя",
                likeCount: 11
            },
            {
                id: "2",
                path: "#",
                imgSrc: "https://avatars.mds.yandex.net/i?id=ffc20310cc4dc43bc0db7e94582ee01d5757e375-4884516-images-thumbs&n=13",
                text: "Пытаюсь понять React и написать соцсеть",
                likeCount: 10
            },
            {
                id: "1",
                path: "#",
                imgSrc: "https://avatars.mds.yandex.net/i?id=ffc20310cc4dc43bc0db7e94582ee01d5757e375-4884516-images-thumbs&n=13",
                text: "Привет. этой мой первый пост",
                likeCount: 5
            },
        ],
        newPostText: ""
    },
    dialogues: {
        chats: [
            { id: 1, path: "/1", user: "Alexey" },
            { id: 2, path: "/2", user: "Maria" },
            { id: 3, path: "/3", user: "Dmitriy" },
            { id: 4, path: "/4", user: "Daria" },
            { id: 5, path: "/5", user: "Vladimir" },
        ],
        messages: [
            {
                id: 1,
                text: "привет, как дела?",
                userId: "1",
                imgSrc: "https://avatars.mds.yandex.net/i?id=ffc20310cc4dc43bc0db7e94582ee01d5757e375-4884516-images-thumbs&n=13",
            },
            {
                id: 2,
                text: " Ничего, а твои? Здорово..",
                userId: "2",
                imgSrc: "https://avatars.mds.yandex.net/i?id=ffc20310cc4dc43bc0db7e94582ee01d5757e375-4884516-images-thumbs&n=13",
            },
            {
                id: 3,
                text: "Тоже не плохо, спасибо",
                userId: "1",
                imgSrc: "https://avatars.mds.yandex.net/i?id=ffc20310cc4dc43bc0db7e94582ee01d5757e375-4884516-images-thumbs&n=13",
            },
        ],
        newMessageText: ""
    },
    navbar: {
        navItems: [
            { path: "/profile", text: "Профиль" },
            { path: "/dialogues", text: "Сообщения" },
            { path: "/news", text: "Новости" },
            { path: "/music", text: "Музыка" },
            { path: "/settings", text: "Настройки" },
        ],
    },
};


export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export const addPost = () => {
    const newPost = {
        id: "5",
        path: "#",
        imgSrc: "https://avatars.mds.yandex.net/i?id=ffc20310cc4dc43bc0db7e94582ee01d5757e375-4884516-images-thumbs&n=13",
        text: state.profile.newPostText,
        likeCount: 0
    };
    state.profile.posts.push(newPost);
    state.profile.textAreaValue = "";
    rerenderEntireTree(state);
}

export const updateNewPostText = (updateText) => {
    state.profile.newPostText = updateText;
    rerenderEntireTree(state);
}

export const addMessage = (textMessage) => {
    const newMessage = {
        id: 4,
        text: textMessage,
        userId: "1",
        imgSrc: "https://avatars.mds.yandex.net/i?id=ffc20310cc4dc43bc0db7e94582ee01d5757e375-4884516-images-thumbs&n=13",
    }
    state.dialogues.messages.push(newMessage);
    state.dialogues.newMessageText = "";
    rerenderEntireTree(state);
}

export const updateNewMessageText = (updateText) => {
    state.dialogues.newMessageText = updateText;
    rerenderEntireTree(state);
}

export default state;