
import { request } from '@/plugins/request'
export const getArticles = params => {
  return request({
    method:'GET',
    url:'/api/articles',
    params
  })
}

export const getTags = () => {
  return request({
    method:'GET',
    url:'/api/tags'
  })
}

export const getFeedArticles = params => {
  return request({
    method:'GET',
    url:'/api/articles/feed',
    params
  })
}

export const addFeedArticles = slug => {
  return request({
    method:'POST',
    url:`/api/articles/${slug}/favorite`
  })
}

export const deleatFeedArticles = slug => {
  return request({
    method:'DELETE',
    url:`/api/articles/${slug}/favorite`
  })
}


export const getArticle = slug => {
  return request({
    method:'GET',
    url:`/api/articles/${slug}`
  })
}

export const getComments = slug => {
  return request({
    method:'GET',
    url:`/api/articles/${slug}/comments`,
  })
}

export const addComments = (slug, body) => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data: {body}
  })
}

export const deleteComments = (slug,id) => {
  return request({
    method:'DELETE',
    url:`/api/articles/${slug}/comments/${id}`
  })
}

// 添加关注
export const addFollow = username => {
  return request({
    method: 'POST',
    url: `/api/profiles/${username}/follow`,
  })
}

// 取消关注
export const deleteFollow = username => {
  return request({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`,
  })
}


