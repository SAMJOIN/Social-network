import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": 'e70bbf9a-b8ae-4705-96d6-06a9b874a072'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const userAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    getFollow(userId) {
        return instance.post(`\follow/${userId}`).
            then(response => response.data)
    },

    getUnfollow(userId) {
        return instance.delete(`\follow/${userId}`).
            then(response => response.data)
    },
}