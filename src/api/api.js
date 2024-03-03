import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": 'e70bbf9a-b8ae-4705-96d6-06a9b874a072'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const userAPI = {

    async getUsers(currentPage = 1, pageSize = 10) {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },

    async getFollow(userId) {
        const response = await instance.post(`follow/${userId}`);
        return response.data;
    },

    async getUnfollow(userId) {
        const response = await instance.delete(`follow/${userId}`);
        return response.data;
    },

    async getAuthData() {
        const response = await instance.get(`auth/me`);
        return response.data;
    },
    async login(email, password, rememberMe) {
        const response = await instance.post(`auth/login`, {email, password, rememberMe});
        return response.data;
    },
    async logout() {
        const response = await instance.delete(`auth/login`);
        return response.data;
    },

    async getProfile(userId) {
        const response = await instance.get(`profile/` + userId);
        return response.data;
    },
}

export const profileAPI = {

    async getStatus(userId) {
        debugger;
        const response = await instance.get('profile/status/' + userId)
        return response.data;
    },

    async updateStatus(status) {
        const response = await instance.put('profile/status' , {status});
        return response.data;
    },
}