import Mock from 'mockjs'
import loginData from './login.json'
import examInfos from './examInfos.json'

// 登录
Mock.mock('/mock/onlineExam/login', {
  code: 200,
  msg: '登陆成功',
  data: loginData
})

// 请求考试信息列表
Mock.mock('/mock/onlineExam/examList', {
  code: 200,
  msg: '请求成功',
  total: 11,
  data: examInfos
})
