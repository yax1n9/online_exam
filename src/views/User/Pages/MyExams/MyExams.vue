<template>
  <div class="my-exams">
    <div class="coming">
      <h3>即将开始</h3>
      <div class="exam-list">
        <exam-item/>
      </div>
    </div>
    <div class="on-going">
      <h3>正在进行</h3>
    </div>
    <div class="done">
      <h3>已经结束</h3>
    </div>
  </div>
</template>

<script>
import ExamItem from '@/components/ExamItem/ExamItem'

export default {
  name: 'MyExams',
  components: {
    ExamItem
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
}
</style>
