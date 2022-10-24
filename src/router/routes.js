import router from '@/router/index'

export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/',
    name: 'home',
    beforeEnter (to, from, next) {
      if (localStorage.getItem('token')) {
        if (parseInt(localStorage.getItem('role')) === 1) {
          router.push('/admin')
        } else if (parseInt(localStorage.getItem('role')) === 0) {
          next()
        } else {
          next()
        }
      } else {
        next('login')
      }
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin/index'),
    redirect: '/admin/home',
    children: [
      {
        path: 'home',
        name: 'admin_home',
        component: () => import('../views/Admin/Pages/Home'),
        meta: {
          label: ['首页']
        }
      },
      {
        path: 'examselect',
        name: 'exam_select',
        component: () => import('../views/Admin/Pages/SelectExam/SelectExam'),
        meta: {
          label: ['试卷管理', '试卷查询']
        }
      },
      {
        path: 'examcreate',
        name: 'exam_create',
        component: () => import('../views/Admin/Pages/CreateExam/CreateExam'),
        meta: {
          label: ['试卷管理', '创建试卷']
        }
      }
    ]
  }
]
