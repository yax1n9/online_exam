<template>
  <div class="create-exam">
    <header>
      <el-steps :active="curStep" finish-status="success" simple>
        <el-step title="基本信息"></el-step>
        <el-step title="选择试题"></el-step>
        <el-step title="试卷设置"></el-step>
        <el-step title="确认完成"></el-step>
      </el-steps>
    </header>
    <div class="content">
      <base-info v-show="curStep===0"/>
      <choose-question v-show="curStep===1"/>
      <exam-setting v-show="curStep===2"/>
      <create-done v-show="curStep===3"/>
    </div>
    <footer>
      <el-button @click="prev" v-show="curStep>0&&curStep<4" class="prev-btn">上一步</el-button>
      <el-button type="primary" @click="next" class="next-btn">下一步</el-button>
    </footer>
  </div>
</template>

<script>
import BaseInfo from '@/components/CreateExam/BaseInfo'
import ChooseQuestion from '@/components/CreateExam/ChooseQuestion/ChooseQuestion'
import ExamSetting from '@/components/CreateExam/ExamSetting'
import CreateDone from '@/components/CreateExam/CreateDone'

export default {
  name: 'CreateExam',
  data () {
    return {
      curStep: 0
    }
  },
  components: {
    BaseInfo,
    ChooseQuestion,
    ExamSetting,
    CreateDone
  },
  methods: {
    prev () {
      if (this.curStep > 0) {
        this.curStep--
      }
    },
    next () {
      if (this.curStep < 4) {
        this.curStep++
      }
    }
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
