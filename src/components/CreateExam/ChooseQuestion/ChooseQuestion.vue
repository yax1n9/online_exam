<template>
  <div class="choose-question">
    <header>
      <p class="title">为试卷《demo》选择试题</p>
      <el-button type="primary" @click="dialogVisible=!dialogVisible" v-show="hasCheckedQuestionList[0]">
        继续添加
      </el-button>
    </header>
    <div class="content">
      <el-empty description="暂无试题" style="height: 100%;" v-show="!hasCheckedQuestionList[0]">
        <el-button type="primary" @click="dialogVisible=!dialogVisible">添加试题</el-button>
      </el-empty>
      <div class="question-list" v-if="hasCheckedQuestionList[0]">
        <question
            v-for="item in hasCheckedQuestionList"
            :key="item.questionId"
            :question="item"
            :operate-visible="true"
            :scene="0">
        </question>
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="80%">
      <el-tabs v-model="tabName">
        <el-tab-pane label="选择试题" name="choose">
          <choose :subject-list="subjectList"/>
        </el-tab-pane>
        <el-tab-pane label="新增试题" name="insert">
          <insert :subject-list="subjectList"/>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>

<script>
import Choose from '@/components/CreateExam/ChooseQuestion/Choose'
import Insert from '@/components/CreateExam/ChooseQuestion/Insert'
import Question from '@/components/QuestionInfo/Question'
import { mapState } from 'vuex'

export default {
  name: 'ChooseQuestion',
  components: {
    Choose,
    Insert,
    Question
  },
  data () {
    return {
      questionList: [], // 选中的试题
      dialogVisible: false,
      tabName: 'choose',
      subjectList: [] // 科目分类列表
    }
  },
  computed: {
    ...mapState('createExam', ['hasCheckedQuestionList'])
  },
  watch: {
    hasCheckedQuestionList () {
      this.initQuestionList()
    }
  },
  methods: {
    getSubjectList () {
      // 设置请求参数请求分类列表
      // 请求列表数据时可以设置分类参数，按类别查询
    },
    initQuestionList () {
      this.questionList = JSON.parse(JSON.stringify(this.hasCheckedQuestionList))
    },
    switchDiaVisible (val) {
      this.dialogVisible = val
    }
  },
  created () {
    this.initQuestionList()
    this.getSubjectList()
    this.$bus.$on('switchDialogVisible', this.switchDiaVisible)
  }
}
</script>

<style scoped lang="less">
.choose-question {
  width: 100%;
  height: 100%;
  background-color: #fefefd;
  border-radius: 10px;
  padding: 20px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
  }

  .content {
    height: 92%;
    margin: 10px 0;
    border: 1px solid #cccccc;
    overflow-y: auto;

    .question-list {
      //height: 100%;
      padding: 0 10px 10px 10px;
    }
  }

  /deep/ .el-dialog {
    margin-top: 60px !important;
    height: 85% !important;

    .el-dialog__body {
      height: 95%;
      padding: 20px;

      .el-tabs {
        height: 95%;

        .el-tabs__content {
          height: 100%;

          .el-tab-pane {
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
