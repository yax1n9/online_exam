<template>
  <div class="exam-setting">
    <div class="content">
      <div class="open-time item">
        <h3>考试开放时间</h3>
        <el-date-picker
            v-model="dateTime"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="timestamp">
        </el-date-picker>
      </div>
      <div class="keep-time item">
        <h3>持续时间（min）</h3>
        <el-input v-model="keepTime" disabled></el-input>
      </div>
      <div class="min-time item">
        <h3>最短交卷时间（min）</h3>
        <el-input v-model="shortestTime" type="number"></el-input>
      </div>
      <div class="pass-line item">
        <h3>及格线</h3>
        <el-input v-model="passLine"></el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExamSetting',
  data () {
    return {
      dateTime: [],
      shortestTime: 5,
      passLine: '60%'
    }
  },
  computed: {
    keepTime () {
      return this.dateTime ? ((this.dateTime[1] - this.dateTime[0]) / 1000 / 60) || 0 : 0
    }
  }
}
</script>

<style scoped lang="less">
.exam-setting {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fefefd;
  border-radius: 10px;
  padding: 20px;

  .content {
    width: 50%;
    height: 100%;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .item {
      width: 50%;

      .el-input, .el-select {
        width: 80%;
      }

      h3 {
        margin-top: 10px;
        padding: 15px 0 10px;
        font-weight: 400;
      }
    }
  }
}
</style>
