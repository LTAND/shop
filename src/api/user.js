import http from "../util/http"

export const user = {
  // 注册用户
  getRegister(data) {
    return http.post(`user/register`, data)
  },
  
  // 更新用户信息
  updataUser(data) {
    return http.put(`user/`, data)
  },

  toLogin(data){
    return http.post(`/token/`,data)
  }
}