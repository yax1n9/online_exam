<template>
  <div class="exam-setting">
    <div class="content">
      <el-form :model="settings" :rules="rules" ref="form" label-position="top" label-width="100px">
        <el-form-item label="开放时间" prop="dateTime">
          <el-date-picker
              v-model="settings.dateTime"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              format="yyyy-MM-dd HH:mm"
              value-format="timestamp">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="持续时间(min)">
          <el-input v-model="keepTime" disabled></el-input>
        </el-form-item>
        <el-form-item label="最短交卷时间" prop="shortestTime">
          <el-input v-model="settings.shortestTime" type="number"></el-input>
        </el-form-item>
        <el-form-item label="最晚进入时间" prop="latestTime">
          <el-input v-model="settings.latestTime" type="number"></el-input>
        </el-form-item>
        <el-form-item label="及格线(%)" prop="passLine">
          <el-input v-model="settings.passLine"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExamSetting',
  data () {
    return {
      settings: {
        dateTime: [],
        shortestTime: 15,
        latestTime: 15,
        passLine: 60
      },
      rules: {
        dateTime: [
          {
            type: 'array',
            required: true,
            message: '请选择试卷开放时间',
            trigger: 'blur'
          }
        ],
        shortestTime: [
          {
            type: 'number',
            required: true,
            message: '请设置最短交卷时间',
            trigger: 'blur'
          }
        ],
        latestTime: [
          {
            type: 'number',
            required: true,
            message: '请设置最短交卷时间',
            trigger: 'blur'
          }
        ],
        passLine: [{
          type: 'number',
          required: true,
          message: '请设置及格线',
          trigger: 'blur'
        }]
      }
    }
  },
  computed: {
    keepTime () {
      return this.settings.dateTime ? ((this.settings.dateTime[1] - this.settings.dateTime[0]) / 1000 / 60) || 0 : 0
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
