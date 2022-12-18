import { selectSubjectList } from '@/api'

const state = {
  // 选中的问题列表
  hasCheckedQuestionList: [],
  // 基本信息
  baseInfo: {},
  // 试卷设置
  settings: {},
  // 分类列表
  subjectList: []
}

const mutations = {
  SET_QUESTION_LIST (state, questionList) {
    state.hasCheckedQuestionList = JSON.parse(JSON.stringify(questionList))
  },
  DELETE_A_QUESTION (state, question) {
    state.hasCheckedQuestionList.splice(state.hasCheckedQuestionList.findIndex(item => item.questionId === question.questionId), 1)
  },
  INSERT_A_QUESTION (state, question) {
    if (state.hasCheckedQuestionList.some(item => item.questionId === question.questionId)) {
      return
    }
    state.hasCheckedQuestionList.push(question)
  },
  // 设置试卷基本信息 baseInfo
  SET_BASE_INFO (state, baseInfo) {
    state.baseInfo = JSON.parse(JSON.stringify(baseInfo))
  },
  // 试卷设置
  SET_SETTINGS (state, settings) {
    state.settings = JSON.parse(JSON.stringify(settings))
  },
  // 分类列表
  SET_SUBJECT_LIST (state, subjectList) {
    state.subjectList = JSON.parse(JSON.stringify(subjectList))
  }
}

const actions = {
  // 请求 subjectList
  async getSubjectList ({ commit }) {
    const res = await selectSubjectList()
    if (res.data.success) {
      commit('SET_SUBJECT_LIST', res.data.data)
    }
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
