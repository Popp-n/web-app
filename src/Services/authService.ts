import http from "./httpService";

const userDataKey = process.env.REACT_APP_USER_STORE_KEY || "";
// const authApi = "/User/Onboarding/auth";

http.setToken(getToken());

// export function login(data: any) {
//   return http.post(authApi, data);
// }

export function getToken() {
  const localStore = localStorage.getItem(userDataKey);
  const stor = JSON.parse(JSON.parse(JSON.stringify(localStore)));
  if (stor) {
    const { accessToken } = stor?.state?.userData;
    if (accessToken) {
      return accessToken;
    }
    return null;
  }
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getToken,
};
