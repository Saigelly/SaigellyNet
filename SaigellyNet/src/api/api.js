import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "8354b9cf-bf31-4610-8fec-c531e1d8f015"
    }
});

export const usersApi = {
    getUsers(page = 1, count = 5) {
        return instance.get(`users?page=${page}&count=${count}`).then(response => response.data)
    },
    // getFollows(userId) {
    //     return instance.post(`follow/${userId}`).then(response => response.data)
    // },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    auth() {
        return instance.get("auth/me").then(responce => responce.data)
    },
    getProfile(userID) {
        return instance.get(`profile/${userID}`).then(response => response.data)
    },
} 

export const authAPI = {
    me () {
        return instance.get("auth/me").then(responce => responce.data)
    },
}