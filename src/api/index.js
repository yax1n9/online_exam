import service from '@/api/request'
import * as url from '@/api/url'
// 所有接口

// 登录
export const login = (params) => {
  return service({
    url: url.login,
    data: params,
    method: 'post'
  })
}

// token 验证
export const tokenVerify = () => {
  return service({
    url: url.verify,
    method: 'get',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}

// 注册
export const register = (params) => {
  return service({
    url: url.register,
    data: params,
    method: 'post'
  })
}

/*
   试卷接口
 */

// 试卷信息
export const getExam = (examId) => {
  return service({
    url: `${url.exam}/${examId}`,
    method: 'get',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}

// 试卷信息列表
export const getExamList = () => {
  return service({
    url: url.exam,
    method: 'get',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}

// 试卷信息分页 条件
export const getExamPageByCondition = (currentPage, pageSize, params) => {
  return service({
    url: `${url.exam}/${currentPage}/${pageSize}`,
    params: params,
    method: 'get',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}

// 添加试卷设置
export const createExam = (params) => {
  return service({
    url: url.exam,
    data: params,
    method: 'post',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}

// 修改试卷
export const modifyExamById = (params) => {
  return service({
    url: `${url.exam}`,
    data: params,
    method: 'put',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}

/*
    单选题接口
 */

// 单选题
export const getSingleChoose = (id) => {
  return service({
    url: `${url.question}/${id}`,
    method: 'get',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}

// 单选题列表
export const getSingleChooseList = () => {
  return service({
    url: `${url.question}`,
    method: 'get',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}

// 单选题分页
export const getSingleChoosePageByCondition = (currentPage, pageSize, params) => {
  return service({
    url: `${url.question}/${currentPage}/${pageSize}`,
    params: params,
    method: 'get',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}

// 添加一条单选题
export const createSingleChoose = (params) => {
  return service({
    url: `${url.question}`,
    data: params,
    method: 'post',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}

/*
学生信息
 */
// 学生
export const getStudent = (studentId) => {
  return service({
    url: `${url.student}/${studentId}`,
    method: 'get',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}

// 学生列表
export const getStudentList = () => {
  return service({
    url: `${url.student}`,
    method: 'get',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}

// 分页条件查询学生
export const getStudentPageByCondition = (currentPage, pageSize, params) => {
  return service({
    url: `${url.student}/${currentPage}/${pageSize}`,
    params: params,
    method: 'get',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}

/*
  分类（科目）
 */

// 新增分类
export const createSubject = (params) => {
  return service({
    url: url.subject,
    data: params,
    method: 'post',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}

// 删除分类
export const removeSubjectById = (subjectId) => {
  return service({
    url: `${url.subject}/${subjectId}`,
    method: 'delete',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}

// 修改分类
export const modifySubjectById = (params) => {
  return service({
    url: url.subject,
    data: params,
    method: 'put',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}

// 查询单个分类
export const selectSubjectById = (subjectId) => {
  return service({
    url: `${url.subject}/${subjectId}`,
    method: 'get',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}

// 查询分类列表
export const selectSubjectList = () => {
  return service({
    url: url.subject,
    method: 'get',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}

// 分页条件查询分类
export const selectSubjectPageByCondition = (currentPage, pageSize, params) => {
  return service({
    url: `${url.subject}/${currentPage}/${pageSize}`,
    params: params,
    method: 'get',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}

/*
  文件
 */
// 上传
export const upload = () => {
  return service({
    url: url.file,
    method: 'post',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}

// 下载
export const download = (fileName) => {
  return service({
    url: `${url.file}/${fileName}`,
    method: 'get',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}
