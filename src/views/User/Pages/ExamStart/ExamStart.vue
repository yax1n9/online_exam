<template>
  <div class="exam-start">
    <div class="exam-info">
      <div class="top">
        <div class="top-left">试卷标题</div>
        <div class="top-right">
          <div class="score-left">总分</div>
          <div class="score-right">80</div>
        </div>
      </div>
      <div class="content">
        <div class="content-left">
          <div class="classify">计算机网络</div>
          <div class="open-time" style="margin-top: 10px">2022-11-28 12:00 ~ 14:00</div>
          <div class="examer" style="margin-top: 10px">系统管理员</div>
        </div>
        <div class="content-right">
          <el-button :type="btnType" @click="answer" :disabled="btnDisabled">{{ btnText }}</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExamStart',
  data () {
    return {
      examId: undefined,
      examInfo: {},
      btnType: 'info',
      btnDisabled: false,
      btnText: '暂未开始'
    }
  },
  methods: {
    initExamInfo () {
      // 初始化当前考试信息，按钮状态
      console.log('初始化当前考试信息，按钮状态')
    },
    answer () {
      // 去答题页面
      this.$router.push({
        name: 'answer',
        query: { examId: this.examId }
      })
    }
  },
  created () {
    this.initExamInfo()
    this.examId = this.$route.query.examId
    console.log(this.examId)
  }
}
</script>

<style scoped lang="less">
.exam-start {
  height: 100%;
  width: 100%;
  background-color: #fefefd;
  border-radius: 10px;
  padding: 20px;

  .exam-info {
    width: 60%;
    margin: 0 auto;
    border: 1px solid #cccccc;
    padding: 10px;

    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .top-left {
        font-size: 20px;
        font-weight: 700;
      }

      .top-right {
        font-size: 18px;

        .score-left {
          height: 34px;
          padding: 5px 10px;
          display: inline-block;
          background-color: #555555;
          color: #fefefd;
          border-radius: 8px 0 0 8px;
          vertical-align: top;
        }

        .score-right {
          height: 34px;
          display: inline-block;
          padding: 5px 10px;
          border-radius: 0 8px 8px 0;
          border: 1px #555555 dashed;
          border-left: none;
          vertical-align: top;
        }
      }
    }

    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;

      .content-left {
        font-size: 16px;
        color: #888888;
      }
    }
  }
}
</style>
