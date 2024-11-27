import { authAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setUserData = (userId, login, email) => ({ type: SET_USER_DATA, data: { userId, login, email } });

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
                const { id, login, email } = data.data;
                dispatch(setUserData(id, login, email));
            }
        })
            .catch(e => console.log(e))
    }
}

export default authReducer;