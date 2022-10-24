<template>
  <div class="statistics-box">
    <div class="exam-count">
      <p class="title">总试卷数</p>
      <i>3</i>
    </div>
    <div class="question-count">
      <p class="title">总试题数</p>
      <i>6</i>
    </div>
    <div class="examinee-count">
      <p class="title">总考生数</p>
      <i>0</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatisticsBox'
}
</script>

<style scoped lang="less">
.statistics-box {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 rgb(0 0 0 / 5%);
  background-color: #fdfdfe;

  .exam-count, .question-count, .examinee-count {
    padding: 40px;

    .title {
      font-size: 16px;
      color: #888888;
    }

    i {
     font-size: 40px;
      color: #0086b3;
    }
  }
}
</style>
