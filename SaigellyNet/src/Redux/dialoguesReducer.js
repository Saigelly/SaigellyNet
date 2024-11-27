const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
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
}


const dialoguesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 4,
                text: state.newMessageText,
                userId: "1",
                imgSrc: "https://avatars.mds.yandex.net/i?id=ffc20310cc4dc43bc0db7e94582ee01d5757e375-4884516-images-thumbs&n=13",
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: "",
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return { ...state, newMessageText: action.newText }
        default:
            return state;
    }
}

export const onAddMessageClick = () => ({ type: ADD_MESSAGE });
export const onNewMessageTextUpdate = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialoguesReducer;
