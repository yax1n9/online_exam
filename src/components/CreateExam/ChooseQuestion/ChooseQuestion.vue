<template>
  <div class="choose-question">
    <header>
      <div class="title">为试卷《demo》选择试题</div>
    </header>
    <div class="content">
      <el-empty description="暂无试题" style="height: 100%;" v-if="!questionList[0]">
        <el-button type="primary" @click="dialogVisible=!dialogVisible">添加试题</el-button>
      </el-empty>
      <div class="question-list" v-if="questionList[0]">
        试题列表
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="80%">
      <el-tabs v-model="tabName">
        <el-tab-pane label="选择试题" name="choose">
          <choose/>
        </el-tab-pane>
        <el-tab-pane label="新增试题" name="insert">
          <insert/>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>

<script>
import Choose from '@/components/CreateExam/ChooseQuestion/Choose'
import Insert from '@/components/CreateExam/ChooseQuestion/Insert'

export default {
  name: 'ChooseQuestion',
  components: {
    Choose,
    Insert
  },
  data () {
    return {
      questionList: [],
      dialogVisible: true,
      tabName: 'choose'
    }
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

  .content {
    height: 100%;
    margin: 10px 0;
  }

  /deep/ .el-dialog {
    margin-top: 60px !important;
    height: 85% !important;
  }
}
</style>
