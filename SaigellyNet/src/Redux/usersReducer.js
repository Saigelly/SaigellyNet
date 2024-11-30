import { usersApi } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_FETCHING = "TOGGLE-IS-FOLLOWING-FETCHING";

const initialState = {
    users: [],
    totalUsersCount: 0,
    usersOnPage: 5,
    currentPage: 1,
    isFetching: false,
    fallowingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    };
                    return u;
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    };
                    return u;
                }),
            }
        case SET_USERS:
            return { ...state, users: action.users, }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalCount, }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage, }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_FETCHING:
            return {
                ...state,
                fallowingInProgress: action.isFetching
                    ? [...state.fallowingInProgress, action.userId]
                    : state.fallowingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userID) => ({ type: FOLLOW, userID });
export const unfollowSuccess = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowingFetching = (isFetching, userId) =>
    ({ type: TOGGLE_IS_FOLLOWING_FETCHING, isFetching, userId });

export const getUsers = (currentPage, usersOnPage) => {
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(true));
        usersApi.getUsers(currentPage, usersOnPage).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(toggleIsFetching(false));
        })
            .catch(e => console.log(e))
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingFetching(true, userId));
        usersApi.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleIsFollowingFetching(false, userId));
            })
            .catch(e => console.log(e));
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingFetching(true, userId));
        usersApi.unfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleIsFollowingFetching(false, userId));
            })
            .catch(e => console.log(e));
    }
}


export default usersReducer;