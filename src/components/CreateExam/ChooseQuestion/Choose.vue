<template>
  <div class="choose">
    <div class="top">
      <div class="top-left">
        <el-checkbox v-model="fullCheck" label="全选" @change="allCheck"></el-checkbox>
        <el-select v-model="subjectId" placeholder="试题分类" @change="initList">
          <el-option
              v-for="item in subjectList"
              :key="item.subjectId"
              :label="item.name"
              :value="item.subjectId">
          </el-option>
        </el-select>
        <el-select v-model="type" placeholder="选择题型">
          <el-option value="1" label="选择题"></el-option>
          <el-option value="2" label="填空题"></el-option>
        </el-select>
      </div>
      <p class="top-right">
        当前选中 <span>{{ hasCheckedCount }}</span> 道
      </p>
    </div>
    <div class="content">
      <question
          v-for="item in questionList"
          :key="item.questionId"
          :question="item"
          :operate-visible="false"/>
    </div>
    <div class="bottom">
      <div class="bottom-left">
        <el-pagination
            background
            layout="prev, pager, next"
            @current-change="initList"
            :page-size="pageSize"
            :current-page.sync="curPage"
            :total="total">
        </el-pagination>
      </div>
      <div class="bottom-right">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="sure">确 定</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Question from '@/components/QuestionInfo/Question'
import { mapMutations, mapState } from 'vuex'
import { getSingleChoosePageByCondition } from '@/api'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Choose',
  components: {
    Question
  },
  props: {
    // ChooseQuestion 中请求的分类列表
    subjectList: {
      require: true,
      type: Array
    }
  },
  data () {
    return {
      questionList: [],
      curPage: 1,
      pageSize: 10,
      total: 0,
      fullCheck: false,
      copyHasCheckedQuestionList: [],
      copyQuestionList: [],
      copyFullCheck: false,
      // 科目分类
      subjectId: undefined,
      // 题型
      type: undefined
    }
  },
  computed: {
    ...mapState('createExam', ['hasCheckedQuestionList']),
    // 已经被选中的问题的 id 集合
    hasCheckedQuestionIds () {
      const ids = []
      this.hasCheckedQuestionList.forEach(item => {
        ids.push(item.questionId)
      })
      return ids
    },
    // 所有页面已被选中的问题统计量
    hasCheckedCount () {
      return this.hasCheckedQuestionList.length
    },
    // 当前页面已被选中的问题统计量
    curPageHasCheckedCount () {
      let count = 0
      this.questionList.forEach(item => {
        if (item.isChecked) {
          count++
        }
      })
      return count
    }
  },
  methods: {
    ...mapMutations('createExam', ['INSERT_A_QUESTION', 'DELETE_A_QUESTION', 'SET_QUESTION_LIST']),
    /**
     * 初始化当前页数据
     */
    initPage () {
      // 1. 初始化列表数据
      this.initList()
      // 2. 为列表设置 isChecked
      this.handleIsChecked()
      // 3. 根据当前页被选中的数据个数初始化全选状态
      this.fullCheck = this.curPageHasCheckedCount === this.questionList.length
    },
    /**
     * 初始化列表数据
     */
    async initList (subjectId) {
      // 1. 设置请求参数
      // 2. 发送请求
      // 3. 为列表赋值
      const params = {}
      if (subjectId) {
        params.subjectId = subjectId
        const res = await getSingleChoosePageByCondition(this.curPage, this.pageSize, params)
        if (res.data.success) {
          this.questionList = res.data.data.records
          this.total = res.data.data.total
        }
      } else {
        const res = await getSingleChoosePageByCondition(this.curPage, this.pageSize, params)
        if (res.data.success) {
          this.questionList = res.data.data.records
          this.total = res.data.data.total
        }
      }
      // 4. 为列表添加 isChecked
      this.handleIsChecked()
      this.copyQuestionList = JSON.parse(JSON.stringify(this.questionList))
      // 5. 更新当前页全选状态
      this.fullCheck = this.curPageHasCheckedCount === this.questionList.length
    },
    /**
     * 为列表数据添加 isChecked 属性
     */
    handleIsChecked () {
      this.questionList.forEach(item => {
        // 判断是否之前已经被选中
        if (this.hasCheckedQuestionIds.includes(item.questionId)) {
          this.$set(item, 'isChecked', true)
        } else {
          // 默认为不选中
          this.$set(item, 'isChecked', false)
        }
      })
    },
    /**
     * 全选
     */
    allCheck () {
      // 1. 改变当前页所有的数据的选中状态
      this.questionList.forEach(item => {
        item.isChecked = this.fullCheck
        // 2. 更新仓库
        if (this.fullCheck) {
          this.INSERT_A_QUESTION(item)
        } else {
          this.DELETE_A_QUESTION(item)
        }
      })
    },
    /**
     * 自定义事件
     * 点击单独项时更新其复选框状态，多选框状态，计数
     * @param question
     */
    switchIsChecked (question) {
      // 1. 更新列表中当前问题的 isChecked
      this.questionList.some(item => {
        if (item.questionId === question.questionId) {
          item.isChecked = question.isChecked
          return true
        } else {
          return false
        }
      })
      if (question.isChecked) {
        // 2. 根据当前问题的状态更新全选状态
        this.fullCheck = this.curPageHasCheckedCount === this.questionList.length
        // 3. 更新仓库
        this.INSERT_A_QUESTION(question)
      } else {
        this.fullCheck = this.curPageHasCheckedCount === this.questionList.length
        this.DELETE_A_QUESTION(question)
      }
    },
    // 取消选择
    cancel () {
      this.$bus.$emit('switchDialogVisible', false)
      this.SET_QUESTION_LIST(this.copyHasCheckedQuestionList)
      this.questionList = JSON.parse(JSON.stringify(this.copyQuestionList))
      this.fullCheck = this.curPageHasCheckedCount === this.questionList.length
    },
    // 确认选择
    sure () {
      this.$bus.$emit('switchDialogVisible', false)
      this.copyHasCheckedQuestionList = JSON.parse(JSON.stringify(this.hasCheckedQuestionList))
      this.copyQuestionList = JSON.parse(JSON.stringify(this.questionList))
    },
    /**
     * 自定义事件
     * 删除单个项时触发
     */
    deleteAQuestion (question) {
      // 1. 删除仓库中的该条信息
      this.DELETE_A_QUESTION(question)
      // 2. 删除 copyHasCheckedQuestionList 中的该条信息
      this.copyHasCheckedQuestionList = JSON.parse(JSON.stringify(this.hasCheckedQuestionList))
      // 3. 更新 questionList
      this.questionList.some(item => {
        if (item.questionId === question.questionId) {
          item.isChecked = false
          return true
        } else {
          return false
        }
      })
      // 4. 更新 copyQuestionList
      this.copyQuestionList.some(item => {
        if (item.questionId === question.questionId) {
          item.isChecked = false
          return true
        } else {
          return false
        }
      })
      // 5. 更新 copyFullCheck
      this.fullCheck = this.curPageHasCheckedCount === this.questionList.length
    }
  },
  created () {
    this.initPage()
    this.$bus.$on('switchIsCheck', this.switchIsChecked)
    this.$bus.$on('deleteQuestion', this.deleteAQuestion)
  }
}
</script>

<style scoped lang="less">
.choose {
  height: 100%;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;

    .top-left {
      .el-checkbox {
        margin-right: 10px;
      }

      .el-select {
        width: 150px;
        margin-right: 10px;
      }
    }

    .top-right {
      span {
        color: #ee9900;
        font-weight: 700;
      }
    }
  }

  .content {
    height: 80%;
    width: 100%;
    overflow-y: auto;
    border: 1px solid #cccccc;
    padding: 0 10px 10px 10px;
  }

  .bottom {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
