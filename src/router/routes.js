export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/',
    name: 'home'
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
      },
      {
        path: 'questionselect',
        name: 'question_select',
        component: () => import('../views/Admin/Pages/SelectQuestion/SelectQuestion'),
        meta: {
          label: ['题目管理', '题目查询']
        }
      },
      {
        path: 'questioncreate',
        name: 'question_create',
        component: () => import('../views/Admin/Pages/CreateQuestion/CreateQuestion'),
        meta: {
          label: ['题目管理', '添加题目']
        }
      },
      {
        path: 'gradeselect',
        name: 'grade_select',
        component: () => import('../views/Admin/Pages/SelectGrade/SelectGrade'),
        meta: {
          label: ['成绩统计', '考生成绩']
        }
      },
      {
        path: 'gradestatistic',
        name: 'grade_statistic',
        component: () => import('../views/Admin/Pages/StatisticGrade/StatisticGrade'),
        meta: {
          label: ['成绩统计', '成绩分段']
        }
      },
      {
        path: 'studentselect',
        name: 'student_select',
        component: () => import('../views/Admin/Pages/SelectStudent/SelectStudent'),
        meta: {
          label: ['考生管理', '考生查询']
        }
      },
      {
        path: 'studentcreate',
        name: 'student_create',
        component: () => import('../views/Admin/Pages/CreateStudent/CreateStudent'),
        meta: {
          label: ['考生管理', '添加考生']
        }
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/User/index'),
    redirect: '/user/myexams',
    children: [
      {
        path: 'myexams',
        name: 'my_exams',
        component: () => import('../views/User/Pages/MyExams/MyExams')
      },
      {
        path: 'mygrades',
        name: 'my_grades',
        component: () => import('../views/User/Pages/MyGrades/MyGrades')
      },
      {
        path: 'examstart',
        name: 'exam_start',
        component: () => import('../views/User/Pages/ExamStart/ExamStart')
      }
    ]
  },
  {
    path: '/exam/answer',
    name: 'answer',
    component: () => import('../views/User/Pages/Answer/Answer')
  }
]
