<template>
  <div class="question" :class="{active:questionInfo.isChecked===true}" @click.stop="questionClick">
    <div class="left">
      <div @click.stop v-if="!operateVisible">
        <el-checkbox v-model="questionInfo.isChecked" @change="handleCheck"></el-checkbox>
      </div>
      <div class="content">
        <div class="top">
          <el-tag type="primary" effect="plain" size="mini">1/10</el-tag>
          <el-tag type="primary" effect="plain" size="mini">单选</el-tag>
          <el-tag type="primary" effect="plain" size="mini">10分</el-tag>
          这是一道单项选择题（）
        </div>
        <div class="bottom">
          分类：<span>计算机网络</span>
          <span></span>作者：<span>系统管理员</span>
          <span></span>更新于：<span>2022-10-21 17:18</span>
        </div>
      </div>
    </div>
    <div class="operate right" v-if="operateVisible">
      <el-link icon="el-icon-edit">编辑</el-link>
      <el-link icon="el-icon-delete">删除</el-link>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Question',
  data () {
    return {
      questionInfo: {}
    }
  },
  props: {
    question: {
      require: true,
      type: Object
    },
    operateVisible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    question: {
      handler (newVal) {
        this.questionInfo = newVal
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    handleCheck () {
      this.$bus.$emit('switchIsCheck', this.questionInfo)
    },
    questionClick () {
      if (!this.operateVisible) {
        this.questionInfo.isChecked = !this.questionInfo.isChecked
        this.handleCheck()
      }
    }
  }
}
</script>

<style scoped lang="less">
.active {
  border: 1px solid deepskyblue !important;
}

.question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  border: 1px solid #cccccc;
  border-radius: 10px;
  padding: 10px;
  transition: all 0.2s linear;

  &:hover {
    border-color: deepskyblue;
  }

  .left {
    display: flex;
    align-items: center;

    .content {
      margin-left: 10px;

      .bottom {
        margin-top: 10px;
        font-size: 13px;
        color: #888888;

        span {
          &:nth-child(even) {
            height: 10px;
            border-right: 2px solid #cccccc;
            margin: 0 8px;
          }
        }
      }
    }
  }

  .right {
    .el-link {
      margin-left: 5px;
    }
  }
}
</style>
