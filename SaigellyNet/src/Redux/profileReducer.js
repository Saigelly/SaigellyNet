import { usersApi } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_PROFILE = "SET-PROFILE";

const initialState = {
    profile: null,
    
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
        { path: "home", label: "Стена" },
        { path: "about", label: "Обо мне" },
        { path: "friends", label: "Друзья" },
        { path: "gallery", label: "Фото" },
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
}

const profileReduce = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: "5",
                path: "#",
                imgSrc: "https://avatars.mds.yandex.net/i?id=ffc20310cc4dc43bc0db7e94582ee01d5757e375-4884516-images-thumbs&n=13",
                text: state.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            }
        case UPDATE_NEW_POST_TEXT:
            return { ...state, newPostText: action.newText };
        case SET_PROFILE:
            return { ...state, profile: action.profile };
        default:
            return state;
    }
}

export const onAddPostClickCreator = () => ({ type: ADD_POST });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const onNewPostTextUpdateCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const getProfile = (userId) => (dispatch) => {
        usersApi.getProfile(userId)
            .then(data => dispatch(setProfile(data)))
            .catch(e => console.log(e))
    }


export default profileReduce;