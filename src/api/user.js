import axios from '@/utils/axios'
import { apiUrl } from '@/config/config'

// 用户注册
export function userRegist(data) {
  return axios.post(`${apiUrl}users`, data)
}

// 登录请求
export function userLogin(data) {
  return axios.post(`${apiUrl}users/login`, data)
}
