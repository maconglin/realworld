import { request } from '@/plugins/request'

export const createArticle = data => {
  return request({
    method:'POST',
    url:'/api/articles',
    data
  })
}

export const deleteArticle = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}`,
  })
}

// 更新文章详情
export const updateArticle = (slug, data) => {
  return request({
    method: 'PUT',
    url: `/api/articles/${slug}`,
    data
  })
}