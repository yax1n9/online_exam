import service from '@/api/request'
import * as url from '@/api/url'
// 所有接口

// 登录
export const login = (params) => {
  // acc psw auth
  return service({
    url: url.login.login,
    data: params,
    methods: 'get'
  })
}

// 请求侧边菜单列表
export const getAdminSideMenuList = (params) => {
  return service({
    url: url.sideMenu.adminSideMenuList,
    data: params,
    methods: 'get'
  })
}

// 考试信息列表
export const getExamList = (params) => {
  return service({
    url: url.exam.examList,
    data: params,
    methods: 'get'
  })
}
