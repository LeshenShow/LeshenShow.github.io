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
    return instance.get(`users?page=${currentPage}&count=${pageSize}`);
  },
  getUserProfile(userId) {
    console.warn("устаревший метод, используй profileAPI object!");
    return profileAPI.getUserProfile(userId);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
};
export const profileAPI = {
  getUserProfile(userId) {
    // console.log(userId);
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    try {
      return instance.put(`profile/status/`, { status: status });
    } catch (error) {
      console.log("error");
    }
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(
      `profile/photo/`,
      formData
      // {headers: { "Content-Type": "multipart/form-data" }}
    );
  },
  saveProfile(profile) {
    return instance.put(`profile/`, profile); // здесь нужно отправить именно объект
  },
};
// return instance.get(`${url}/profile/${userId}`).then((response) => {
//   return response.data;
// });
export const authAPI = {
  getMe() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false, captcha) {
    // console.log(captcha);
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};
