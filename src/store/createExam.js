const state = {
  // 选中的问题列表
  hasCheckedQuestionList: []
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
  }
}

const actions = {}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
