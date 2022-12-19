import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/routes'
import jwtDecode from 'jwt-decode'
import { tokenVerify } from '@/api'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // 访问登录页 直接放行
  if (to.path === '/login' || to.path === '/register') {
    return next()
  }
  tokenVerify().then((res) => {
    if (!res.data.success) {
      // token不合法
      return next('/login')
    }
  }).catch(() => {
    return next('/login')
  })
  const tokenInfo = jwtDecode(window.localStorage.getItem('token'))
  // 没有 token 返回登录页
  if (!tokenInfo) {
    return next('/login')
  }
  // 有 token
  // 访问首页 解析token中的身份
  if (to.path === '/') {
    return tokenInfo.role === '1' ? next('/admin') : next('/user')
  }
  return next()
})

export default router
