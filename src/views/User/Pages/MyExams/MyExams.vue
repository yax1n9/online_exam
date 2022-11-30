<template>
  <div class="my-exams">
    <!--<div class="coming">-->
    <!--  <h3>即将开始</h3>-->
    <!--  <div class="exam-list">-->
    <!--    <exam-item/>-->
    <!--  </div>-->
    <!--</div>-->
    <!--<div class="on-going">-->
    <!--  <h3>正在进行</h3>-->
    <!--</div>-->
    <!--<div class="done">-->
    <!--  <h3>已经结束</h3>-->
    <!--</div>-->
    <el-collapse v-model="activityName" @change="handleChange" accordion>
      <el-collapse-item name="1" title="即将开始">
        <exam-item v-for="item in comingExamList" :key="item.examId" @click.native="checkExam(item)"/>
        <exam-item/>
        <exam-item/>
        <exam-item/>
        <exam-item/>
      </el-collapse-item>
      <el-collapse-item name="2" title="正在进行">
        <exam-item/>
      </el-collapse-item>
      <el-collapse-item name="3" title="已经结束">
        <exam-item/>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import ExamItem from '@/components/ExamItem/ExamItem'

export default {
  name: 'MyExams',
  components: {
    ExamItem
  },
  data () {
    return {
      activityName: '1',
      // 1 即将开始
      comingExamList: [{
        examId: 1,
        examName: '上学期期末考'
      }],
      // 2 正在进行
      onGoingExamList: [],
      // 3 已经结束
      doneExamList: []
    }
  },
  methods: {
    initExamList () {
      // 请求我的试卷列表，过滤出三个数组赋值给 comingExamList onGoingExamList doneExamList
      console.log('请求我的试卷列表，过滤出三个数组赋值给 comingExamList onGoingExamList doneExamList')
    },
    handleChange (val) {
      if (val) {
        console.log(val)
      }
    },
    // 点击试卷项
    checkExam (examInfo) {
      // 根据试卷id请求试卷基信息
      // 跳转页面到 examStart
      this.$router.push({
        name: 'exam_start',
        query: { examId: examInfo.examId }
      })
    }
  },
  created () {
    this.initExamList()
  }
}
</script>

<style scoped lang="less">
.my-exams {
  background-color: #fefefd;
  border-radius: 10px;
  padding: 20px;
  height: 100%;
  color: #333333;
  overflow: auto;
}
</style>
