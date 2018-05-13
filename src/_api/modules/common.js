import request from '@/_api/request'

export function test(url, params) {
  return request({
    url: url,
    method: 'get',
    params: params
  })
}
