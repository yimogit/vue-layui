import request from '@/_api/request'

export function test() {
  return request({
    url: '/test',
    method: 'post'
  })
}
