import { getExamList, getSingleChooseList, getStudentList } from '@/api'

const state = {
  examList: [],
  questionList: [],
  studentList: []
}

const getters = {
  // 正在进行中的考试列表
  onGoingExamList: (state) => {
    return state.examList.filter((item) => item.isBegin === 1)
  },
  // 总试卷数
  examCount: (state) => {
    return state.examList.length
  },
  // 正在进行中的考试数量
  currentExamCount: (_, getters) => {
    return getters.onGoingExamList.length
  },
  // 总试题数
  questionCount: (state) => {
    return state.questionList.length
  },
  // 总考生数
  studentCount: (state) => {
    return state.studentList.length
  }
}

const mutations = {
  EXAM_LIST (state, list) {
    state.examList = list
  },
  SINGLE_CHOOSE_LIST (state, list) {
    state.questionList = list
  },
  STUDENT_LIST (state, list) {
    state.studentList = list
  }
}

const actions = {
  async initHomeData ({ commit }) {
    // 所有试卷
    const res1 = await getExamList()
    if (res1.data.success) {
      commit('EXAM_LIST', res1.data.data)
    }
    // 所有试题
    const res2 = await getSingleChooseList()
    if (res2.data.success) {
      commit('SINGLE_CHOOSE_LIST', res2.data.data)
    }
    // 所有考生
    const res3 = await getStudentList()
    if (res3.data.success) {
      commit('STUDENT_LIST', res3.data.data)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
