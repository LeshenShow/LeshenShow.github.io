import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "72c984dc-4e19-428a-8ec4-adaf5048c782",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10, pageNumberEvent = 1) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
};
// return instance.get(`${url}/profile/${userId}`).then((response) => {
//   return response.data;
// });
export const authAPI = {
  getMe() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },

}