<template>
  <div class="create-exam">
    <header>
      <el-steps :active="curStep" finish-status="success" simple>
        <el-step title="基本信息"></el-step>
        <el-step title="选择试题"></el-step>
        <el-step title="试卷设置"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
    </header>
    <div class="content">
      <base-info v-show="curStep===0" ref="baseInfo"/>
      <choose-question v-show="curStep===1" :exam-title="examTitle"/>
      <exam-setting v-show="curStep===2" ref="settings"/>
      <create-done v-show="curStep===3"/>
    </div>
    <footer>
      <el-button @click="prev" v-show="curStep>0&&curStep<3" class="prev-btn">上一步</el-button>
      <el-button type="primary" @click="next" class="next-btn" v-show="curStep<3">下一步</el-button>
    </footer>
  </div>
</template>

<script>
import BaseInfo from '@/components/CreateExam/BaseInfo'
import ChooseQuestion from '@/components/CreateExam/ChooseQuestion/ChooseQuestion'
import ExamSetting from '@/components/CreateExam/ExamSetting'
import CreateDone from '@/components/CreateExam/CreateDone'
import { mapState } from 'vuex'
import { createExam } from '@/api'

export default {
  name: 'CreateExam',
  data () {
    return {
      curStep: 0,
      examTitle: ''
    }
  },
  components: {
    BaseInfo,
    ChooseQuestion,
    ExamSetting,
    CreateDone
  },
  computed: {
    ...mapState('createExam', ['hasCheckedQuestionList', 'baseInfo', 'settings'])
  },
  methods: {
    /**
     * 上一步
     */
    prev () {
      if (this.curStep > 0) {
        this.curStep--
      }
    },
    /**
     * 下一步
     */
    next () {
      switch (this.curStep) {
        case 0:
          // 基本信息
          this.$refs.baseInfo.$refs.form.validate((valid) => {
            if (valid) {
              // 数据合法，保存到vuex中，最后一起提交
              this.$store.commit('createExam/SET_BASE_INFO', this.$refs.baseInfo.baseInfo)
              if (this.curStep < 4) {
                this.curStep++
              }
            } else {
              // 数据没有通过验证
              this.$message.error('数据不合法，请重新输入')
            }
          })
          this.examTitle = this.$refs.baseInfo.baseInfo.examName
          break
        case 1:
          // 选择试题
          if (this.curStep < 4) {
            this.curStep++
          }
          break
        case 2:
          // 设置 提交
          this.$refs.settings.$refs.form.validate((valid) => {
            if (valid) {
              // 数据合法，保存到vuex中，最后一起提交
              this.$store.commit('createExam/SET_SETTINGS', this.$refs.settings.settings)
              // 提交所有信息
              if (this.submitExam()) {
                if (this.curStep < 4) {
                  this.curStep++
                }
              } else {
                this.$message.error('试卷创建失败，请稍后再试！')
              }
            } else {
              // 数据没有通过验证
              this.$message.error('数据不合法，请重新输入')
            }
          })
          break
      }
    },
    /**
     * 提交试卷
     * @returns {Promise<void>}
     */
    async submitExam () {
      const questionIds = []
      this.hasCheckedQuestionList.forEach((item) => {
        questionIds.push(item.questionId)
      })
      const params = {
        exam: {
          title: this.baseInfo.examName,
          subjectId: this.baseInfo.examSubject,
          cover: this.baseInfo.imageUrl,
          startTime: this.settings.dateTime[0],
          endTime: this.settings.dateTime[1],
          shortestSubmitTime: this.settings.shortestTime,
          latestEnterTime: this.settings.latestTime,
          passLine: this.settings.passLine
        },
        questionIds: questionIds
      }
      const res = await createExam(params)
      this.$store.commit('createExam/SET_QUESTION_LIST', [])
      return res.data.success
    }
  },
  mounted () {
    this.$store.dispatch('createExam/getSubjectList')
  }
}
</script>

<style scoped lang="less">
.create-exam {
  height: 83%;

  header {
    .el-steps {
      background-color: #fefefd;
      border-radius: 10px;
    }
  }

  .content {
    margin: 15px 0;
    height: 100%;
  }

  footer {
    position: relative;

    .prev-btn {
      position: absolute;
      top: 0;
      left: 0;
    }

    .next-btn {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}

</style>
