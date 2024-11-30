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
                ...action.data
            }
        default:
            return state;
    }
}

export const setUserData = (userId, login, email, isAuth) => ({ type: SET_USER_DATA, data: { userId, login, email, isAuth } });


export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
                const { id, login, email } = data.data;
                dispatch(setUserData(id, login, email, true));
            }
        })
            .catch(e => console.log(e))
    }
}

export const putLogin = (email, password, remmemberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, remmemberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getAuthUserData());
                }
                else {
                    return data.messages[0];
                }
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
    }
}

export default authReducer;