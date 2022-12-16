import Vue from 'vue'
import Vuex from 'vuex'
import asideMenu from '@/store/asideMenu'
import selectExam from '@/store/selectExam'
import createExam from '@/store/createExam'
import adminHome from '@/store/adminHome'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    asideMenu,
    selectExam,
    createExam,
    adminHome
  }
})
