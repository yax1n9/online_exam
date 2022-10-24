import Vue from 'vue'
import Vuex from 'vuex'
import asideMenu from '@/store/asideMenu'
import selectExam from '@/store/selectExam'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    asideMenu,
    selectExam
  }
})
