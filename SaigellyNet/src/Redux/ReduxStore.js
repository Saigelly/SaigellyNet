import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialoguesReducer from "./dialoguesReducer";
import navbarReducer from "./navbarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import { thunk } from "redux-thunk";


const reducers = combineReducers({
    profileReducer,
    dialoguesReducer,
    navbarReducer,
    authReducer,
    usersPage: usersReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));


export default store;