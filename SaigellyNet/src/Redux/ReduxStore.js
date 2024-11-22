import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialoguesReducer from "./dialoguesReducer";
import navbarReducer from "./navbarReducer";
import usersReducer from "./usersReducer";


const reducers = combineReducers({
    profileReducer,
    dialoguesReducer,
    navbarReducer,
    usersPage: usersReducer,
});

const store = createStore(reducers);


export default store;