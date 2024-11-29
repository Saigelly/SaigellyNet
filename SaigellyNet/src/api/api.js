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
        console.warn("method getProfile is now piece profileAPI. replace please")
        return profileAPI.getProfile(userID)
    },
}

export const authAPI = {
    me() {
        return instance.get("auth/me").then(responce => responce.data)
    },
    login(dataAuth) {
        return instance.post("auth/login", dataAuth).then(responce => responce.data)
    },
    logOut() {
        return instance.delete("auth/me").then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    getProfileStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    putProfileStatus(status) {
        return instance.put(`profile/status/`, { status }).then(response => response.data)
    },
}