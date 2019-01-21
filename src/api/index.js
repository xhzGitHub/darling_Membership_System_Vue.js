/*
包含n个接口请求函数的模块
函数的返回值：promise对象
 */

import ajax from './ajax'
const base_url = '/api'
// const base_url = 'https://darlinglook.com/cgi-bin/cgi_handler.py'

// 获取验证码
export const reqGetcode = (membership_query_type, tel) => ajax(
  `${base_url}?query_type=3&membership_query_type=${membership_query_type}&tel=${tel}&openid=oDSI91icP6QsWJkFZalVPFAXZgXU`,
  )
// 校验验证码
export const reqVerifycode = (query_type, membership_query_type, tel, sms_code, openid) => ajax(
  `${base_url}`,
  {
    query_type,
    membership_query_type,
    tel,
    sms_code,
    openid
  },
  'POST'
)
// 上传用户信息
// 获取用户基本信息
export const reqGetUserBasicInfo = (membership_query_type) => ajax(
  `${base_url}?query_type=3&membership_query_type=${membership_query_type}&openid=oDSI91icP6QsWJkFZalVPFAXZgXU`,
)
// 获取会员基本信息
// 获取用户体型数据
