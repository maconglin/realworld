import { request } from '@/plugins/request'

export const login = data => {
  return request({
    method:'POST',
    url:'/api/users/login',
    data
  })
}

export const register = data => {
  return request({
    method:'POST',
    url:'/api/users/',
    data
  })
}

// 修改用户资料
export const updateUser = data => {
  return request({
    method: 'PUT',
    url: '/api/user',
    data
  })
}
