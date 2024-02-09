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
      .then((response) => response.data);
  },
  getUserProfile(userId) {
    console.warn("устаревший метод, используй profileAPI object!");
    return profileAPI.getUserProfile(userId);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
  unfollow(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
};
export const profileAPI = {
  getUserProfile(userId) {
    console.log(userId);
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status: status });
  },
};
// return instance.get(`${url}/profile/${userId}`).then((response) => {
//   return response.data;
// });
export const authAPI = {
  getMe() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
